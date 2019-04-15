using ConsoleTables;
using IdentityModel.Client;
using Intellect.console.Dtos;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net.Http;
using System.ServiceProcess;
using System.Text;
using System.Threading.Tasks;

namespace Intellect.console
{
    public class Service : ServiceBase, IDisposable
    {
        static int index = 0;
        private static readonly log4net.ILog log = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        internal void ConsoleStart()
        {
            OnStart(new string[] { });
        }

        protected override void OnStart(string[] args)
        {
            Nito.AsyncEx.AsyncContext.Run(() => GetToken());

            if (string.IsNullOrEmpty(BaseRequest.TokenValue))
            {
                return;
            }

            Nito.AsyncEx.AsyncContext.Run(() => GetForiegners());

            Console.Write("Do you want to register users?(Y/N)");
            var answer = Console.ReadLine();

            if (answer == "Y" || answer == "y")
            {
                Nito.AsyncEx.AsyncContext.Run(() => RegisterUsers());
            }
            else
            {
                return;
            }
        }

        public async Task GetToken()
        {
            Console.Write("Enter Username: ");
            var username = Console.ReadLine();

            Console.Write("Enter Password: ");
            var password = string.Empty;

            ConsoleKeyInfo info = Console.ReadKey(true);
            while (info.Key != ConsoleKey.Enter)
            {
                if (info.Key != ConsoleKey.Backspace)
                {
                    Console.Write("*");
                    password += info.KeyChar;
                }
                else if (info.Key == ConsoleKey.Backspace)
                {
                    if (!string.IsNullOrEmpty(password))
                    {
                        password = password.Substring(0, password.Length - 1);
                        int pos = Console.CursorLeft;
                        Console.SetCursorPosition(pos - 1, Console.CursorTop);
                        Console.Write(" ");
                        Console.SetCursorPosition(pos - 1, Console.CursorTop);
                    }
                }
                info = Console.ReadKey(true);
            }

            log.DebugFormat("Getting access to client.");
            var client = new HttpClient();

            log.DebugFormat("Requesting from authorityUrl {0}", "http://localhost:5000");
            log.DebugFormat("Requesting from authority");
            var disco = await client.GetDiscoveryDocumentAsync("http://localhost:5000");

            if (disco.IsError)
            {
                log.ErrorFormat(disco.Error);
                return;
            }

            log.DebugFormat("Authority accessed successfull");
            log.DebugFormat("Requesting security token.");

            var tokenResponse = await client.RequestPasswordTokenAsync(new PasswordTokenRequest
            {
                Address = disco.TokenEndpoint,

                ClientId = "js",
                ClientSecret = "secret",
                Scope = "openid profile api1",

                UserName = username,
                Password = password
            });

            if (!tokenResponse.IsError)
            {
                log.DebugFormat("Token acquired");
                BaseRequest.TokenValue = tokenResponse.AccessToken;
            }
            else
            {
                log.Error("Please check your credentials");
                return;
            }

            log.DebugFormat("Finalizing authentication");
        }

        public async Task GetForiegners()
        {
            log.Info("Getting Unregistered users from api/Account/GetForeigners");
            var result = await ApiService.GetResponse<List<UnRegUserOutputDto>>("https://localhost:5001/api/Account/GetForiegners");
            Console.WriteLine();

            log.Info("In active users");
            var table = new ConsoleTable("Id", "UserName", "Email", "IsActive");

            foreach (var item in result)
            {
                table.AddRow(item.Id, item.UserName, item.Email, item.IsActive);
            }
            table.Write();
        }

        public async Task RegisterUsers()
        {
            Console.WriteLine("Add userId to be registered");

            var id = Console.ReadLine();
            log.Info("Registering users from api/Account/AddForiegner");
            var input = new AddForiegnerInputDto { Id = id };

            await ApiService.Update("https://localhost:5001/api/Account/AddForiegner", JsonConvert.SerializeObject(input));
            log.Info("Registered");
            log.Info("Showing unregistered users");
            Nito.AsyncEx.AsyncContext.Run(() => GetForiegners());
        }

    }
}
