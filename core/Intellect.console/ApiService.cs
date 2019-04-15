using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace Intellect.console
{
    public static class ApiService
    {
        public static async Task<T> GetResponse<T>(string webUrl) where T: class
        {
            using (var client = new HttpClient())
            {
                client.SetBearerToken(BaseRequest.TokenValue);
                var response = await client.GetAsync(webUrl);
                var result = await response.Content.ReadAsStringAsync();
                var content = JsonConvert.DeserializeObject<T>(result);

                return content;
            }
        }

        public static async Task<T> Update<T>(string webUrl, string stringContent) where T : class
        {
            using (var client = new HttpClient())
            {
                client.SetBearerToken(BaseRequest.TokenValue);
                string contentType = "application/json";

                var response = await client.PutAsync(webUrl, new StringContent(stringContent, Encoding.UTF8, contentType));
                var result = await response.Content.ReadAsStringAsync();
                var content = JsonConvert.DeserializeObject<T>(result);

                return content;
            }
        }

        public static async Task Update(string webUrl, string stringContent)
        {
            using (var client = new HttpClient())
            {
                client.SetBearerToken(BaseRequest.TokenValue);
                string contentType = "application/json";

                var response = await client.PutAsync(webUrl, new StringContent(stringContent, Encoding.UTF8, contentType));
                var result = await response.Content.ReadAsStringAsync();
            }
        }
    }
}
