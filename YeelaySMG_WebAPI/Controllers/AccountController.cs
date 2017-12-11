using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace YeelaySMG.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]/[action]")]
    public class AccountController : Controller
    {

        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;//登录管理器

        private readonly ILogger _logger;



        public AccountController(UserManager<ApplicationUser> userManager,
                    SignInManager<ApplicationUser> signInManager,
                    ILogger<AccountController> logger)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _logger = logger;
        }


        /// <summary>
        /// 登录
        /// </summary>
        [HttpPost]
        public async Task<ResponseResult> Login([FromBody][Bind("UserName,Password")]LoginViewModel user)
        {
            var result = await _signInManager.PasswordSignInAsync(user.UserName, user.Password, false, lockoutOnFailure: false);
            if (result.Succeeded)
            {
                _logger.LogInformation("User logged in.");
                return new ResponseResult(true, "success");
            }
            if (result.RequiresTwoFactor)
            {
                return new ResponseResult(false, "RequiresTwoFactor");
            }
            if (result.IsLockedOut)
            {
                _logger.LogWarning("User account locked out.");
                return new ResponseResult(false, "User account locked out.");
            }
            return new ResponseResult(false, "Invalid login attempt.");
        }


        /// <summary>
        /// 注册
        /// </summary>
        [HttpPost]
        public async Task<ResponseResult> Register([Bind("UserName,Password")]RegistorViewModel _user)
        {
            var user = new ApplicationUser(){UserName = _user.UserName};
            //创建新用户，对密码进行加密,此处默认情况下会对密码进行验证（密码规则）
            //还会进行用户名是否存在的验证
            var result = await _userManager.CreateAsync(user, _user.Password);
            if (result.Succeeded)
            {
                _logger.LogInformation("User created a new account with password.");

                //var code = await _userManager.GenerateEmailConfirmationTokenAsync(user);//生成验证码

                await _signInManager.SignInAsync(user, isPersistent: false);//创建新用户，对密码进行加密（数据库操作）
                _logger.LogInformation("User created a new account with password.");
                return new ResponseResult(true, "User created a new account with password.code：");
            }
            return new ResponseResult(false, "Invalid register attempt.",result.Errors);
        }


    }

}