using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Demo.Models;
using MongoDB.Driver;
using Demo.Properties;
using System.Configuration;

namespace Demo.Controllers
{
    public class HomeController : Controller
    {
        public MongoDatabase MongoDatabase;
        public MongoCollection Collections;

        // GET: Home
        public HomeController() {
            var client = new MongoClient(ConfigurationManager.AppSettings["connectionString"]);
            MongoServer server = client.GetServer();
            MongoDatabase db = server.GetDatabase("test");
            Collections = db.GetCollection<food>("expenditure");
            long a = Collections.Count();
            foreach (food food in Collections.FindAllAs<food>())
            {
                string id = food._id.ToString();
                double category = food.category;
                int q = food.quintile;
                string y = food.year.ToString();
            }
        }
        public ActionResult Index()
        {
            long count = Collections.Count();
            return null;
        }
        
        [HttpPost]
        public ActionResult charts(DropDownList ddl) {
            if (ddl != null)
                return Json("Success");
            else
                return Json("Error");
        }
    }
}