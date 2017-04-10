using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace SeatSample.Hubs
{
    public class SeatHub : Hub
    {
        public void Send(string id, string status)
        {
            Clients.All.addNewMessageToPage(id, status);
        }
    }
}