using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SeatSample.Startup))]
namespace SeatSample
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
            app.MapSignalR();
        }
    }
}
