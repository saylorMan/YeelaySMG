using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

    
public class LoginViewModel
{
    ///<summary>用户名</summary>
    [Required]
    public string UserName { get; set; }

    ///<summary>密码</summary>
    [Required]
    [DataType(DataType.Password)]
    public string Password { get; set; }

    ///<summary>是否记住密码</summary>
    [Display(Name = "Remember me?")]
    public bool RememberMe { get; set; }

}

public class RegistorViewModel
{
    
    ///<summary>用户名</summary>
    [Required]
    public string UserName { get; set; }

    ///<summary>密码</summary>
    [Required]
    [DataType(DataType.Password)]
    public string Password { get; set; }

    ///<summary>是否记住密码</summary>
    [Display(Name = "Remember me?")]
    public bool RememberMe { get; set; }

}