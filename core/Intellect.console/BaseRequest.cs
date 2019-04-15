using System.Configuration;

namespace Intellect.console
{
    public class BaseRequest
    {
        public static string TokenValue { get; set; }
        public string _baseUrl = ConfigurationManager.AppSettings["BaseUrl"];
    }
}
