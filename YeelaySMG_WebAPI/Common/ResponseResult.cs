public class ResponseResult
{
    public ResponseResult(bool result, string msg,object msgex = null)
    {
        Result = result;
        Message = msg;
        MessageEx= msgex;
    }
    public bool Result { get; set; }
    public string Message { get; set; }

    public object MessageEx { get; set; }
}