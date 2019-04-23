using System;
using System.Net.Http;

namespace Intellect.console
{
    class Program
    {
        private static readonly log4net.ILog log = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        static void Main(string[] args)
        {
            log.DebugFormat("Service started");
            Service service = new Service();
            service.ConsoleStart();
            do
            {
                Console.WriteLine("Type 'EXIT' to quit.");
            }
            while (string.Compare("exit", Console.ReadLine(), true) != 0);
            service.Stop();
        }
    }
}
