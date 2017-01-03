using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Demo.Models;
using MongoDB.Driver;
using Demo.Properties;
using System.Configuration;
using MongoDB.Bson;
using MongoDB.Driver.Builders;
using MongoDB.Driver.Linq;

namespace Demo.Controllers
{
    public class HomeController : Controller
    {
        public MongoDatabase MongoDatabase;
        //public MongoCollection Collections;

        //// GET: Home
        //public HomeController()
        //{
        //    var client = new MongoClient(ConfigurationManager.AppSettings["connectionString"]);
        //    MongoServer server = client.GetServer();
        //    MongoDatabase db = server.GetDatabase("expenditure");
        //    Collections = db.GetCollection<food>("expenditure");
        //    long a = Collections.Count();

        //    foreach (food food in Collections.FindAllAs<food>())
        //    {
        //        string id = food._id.ToString();
        //        int q = food.quintile;
        //    }
        //}
        public MongoDB.Driver.MongoCollection Collections;
        List<food> foodList = new List<food>();
        List<Elas> eList = new List<Elas>();
        List<points> pl = new List<points>();
        List<points> pl1 = new List<points>();
        List<points> pl2 = new List<points>();
        List<points> pl3 = new List<points>();
        // GET: Home
        public HomeController()
        {
            var client = new MongoClient(ConfigurationManager.AppSettings["connectionString"]);

            var db = client.GetDatabase("expenditure");
            //var Collections = db.GetCollection<food>("expenditure");
            var Collections = db.GetCollection<Elas>("elasticity_v4");

            var List = Collections.Find(x => x.Category == "Alcoholic drinks").ToList();
            eList = List;
            
            foreach (var f in List)
            {
                if ((f.Subcategory != "")&&(f.Subsubcategory=="")) { 
                    points p = new points();
                    p.Category = f.Subcategory;
                    p.Elasticity = f.Elasticity;
                    p.Quintile = f.Quintile;
                    pl.Add(p);
                }
            }
        }
        public ActionResult Index()
        {
            //long count = Collections.Count();
            //food f1 = Collections.FindOneAs<food>();
            return View();
        }
        
        [HttpPost]
        public ActionResult charts(DropDownList ddl)
        {
            DropDownList dd = ddl;
            int nid = 0;
            pl1 = pl.OrderBy(o => o.Category).ToList();
            pl2 = pl1.OrderBy(o => o.Quintile).ToList();
            for (int i = 0; i < pl.Count(); i++) {
                points temp = pl2.ElementAt(i);
                nid++;
                temp.number = nid;
                pl3.Add(temp);
            }
            if (dd != null)
            {
                return Json(pl3.ToJson());
            }
            //return Json(json.ToJson());
            else
                return Json("Error");
        }
        public ActionResult charts() {
            return View();
        }
        public ActionResult readOnly() {
            return View();
        }
        public ActionResult boxplot() {
            return View();
        }
    }
}