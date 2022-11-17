# Live Project
Code snippets from live project working collaboratively over a two week sprint
<h2>Introduction</h2>
<p>
During the last two weeks of my coding boot camp at The Tech Academy, I had the opportunity to work on a project with a team of my peers to develop an interactive website using ASP .NET MVC and Entity Framework. This website is used for managing content and productions for an acting company, and it is designed to be a content management service for the users to manage the website on their own. During this two-week sprint, I was able to add requested features, use Chrome Developer Tools to fix bugs and review and refactor my own code. I was able to see how a big project can be broken down into smaller feasible stories. I experienced working with a more senior developer to understand how to approach coding and troubleshooting problems. I worked on several back-end stories that gave me a more comprehensive understanding of Entity Framework. I was also able to utilize Javascript and Bootstrap to complete many front-end stories. This project allowed me to gain experience in working with the Agile framework to help me develop my project management skills.
Below you will find descriptions of the stories I completed along with code snippets. I also have a few complete code files in this repo for the larger functionalities I implemented.
</p>
<h2>Back-End Stories</h2>

* Create BlogPost Model and CRUD functionality



<h3>Create BlogPost Model and CRUD functionality</h3>
<p>

I was tasked with creating a model in the website's Blog Area. I used the CodeFirst approach and started by creating a new model, BlogPost. 

</p>

```
namespace TheatreCMS3.Areas.Blog.Models
{
    public class BlogPost  //model class created with the following properties
    {
        public int BlogPostId { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public DateTime Posted { get; set; }
        public string Author { get; set; }
    }
}
```
<p> I then had to ensure I created a table for BlogPosts before I created the controller.</p>

```
 public System.Data.Entity.DbSet<TheatreCMS3.Areas.Blog.Models.BlogPost> BlogPosts { get; set; }

```
<p>Then using Entity Framework I created the controller and scaffolded the CRUD pages.</p>

<h3></h3>

<h2>Front-End Stories</h2>
* Style the Create and Edit Pages for BlogPost Model

<h3>Style the CRUD Pages for BlogPost Model</h3>
<p>I utilized CSS and Bootstrap to customize the CRUD pages according to the requested features. The features included responsive buttons and input boxes, buttons with icons using Font-Awesome, and a dynamic display of the blog posts as they are created and deleted among other features.  
Below is a snippet of the JQuery, Bootstrap and CSS I utilized.
</p>

```
@model TheatreCMS3.Areas.Blog.Models.BlogPost

@{
    ViewBag.Title = "Create";
    Layout = "~/Views/Shared/_Layout.cshtml";
}
<div class="blogpostCreate-Header">
    <h2>Create Blog Post</h2>
</div>

<div class="blogpostCreate-Container">
    @using (Html.BeginForm())
    {
        @Html.AntiForgeryToken()


        <div class="form-horizontal blogpostCreate-Form">
            <h4 class="blogpostCreate-FormHeader">Blog Post</h4>
            <hr />
            @Html.ValidationSummary(true, "", new { @class = "text-danger" })
            <div class="form-group">
                <!--title of box-->
                @Html.LabelFor(model => model.Title, htmlAttributes: new { @class = "control-label col-md-2" })

                <div class="col-md-12">
                    <!--actual box-->
                    @Html.EditorFor(model => model.Title, new { htmlAttributes = new { @class = "form-control", placeholder = "Enter the title" } })
                    <!--span for error-->
                    @Html.ValidationMessageFor(model => model.Title, "", new { @class = "text-danger" })
                </div>
            </div>

            <div class="form-group">
                @Html.LabelFor(model => model.Content, htmlAttributes: new { @class = "control-label col-md-2" })
                <div class="col-md-12">
                    @Html.EditorFor(model => model.Content, new { htmlAttributes = new { @class = "form-control", placeholder = "Enter your content" } })
                    @Html.ValidationMessageFor(model => model.Content, "", new { @class = "text-danger" })
                </div>
            </div>

            <div class="form-group">
                @Html.LabelFor(model => model.Posted, htmlAttributes: new { @class = "control-label col-md-2" })
                <div class="col-md-12">
                    @Html.EditorFor(model => model.Posted, new { htmlAttributes = new { @class = "form-control", placeholder = "Enter date posted" } })
                    @Html.ValidationMessageFor(model => model.Posted, "", new { @class = "text-danger" })
                </div>
            </div>

            <div class="form-group">
                @Html.LabelFor(model => model.Author, htmlAttributes: new { @class = "control-label col-md-2" })
                <div class="col-md-12">
                    @Html.EditorFor(model => model.Author, new { htmlAttributes = new { @class = "form-control", placeholder = "Enter your name" } })
                    @Html.ValidationMessageFor(model => model.Author, "", new { @class = "text-danger" })
                </div>
            </div>

            <div class="form-group container text-center">
                <div class="row">
                    <div class="col align-self-center">
                        <input type="submit" value="Submit" class="btn btn-default" />
                    </div>
                </div>
            </div>
        </div>
    }
    
    <div class="container text-center">
        <div class="row">
            <div class="col align-self-center">
                <!--added bootstrap to convert link to button and to be able to add css-->
                @Html.ActionLink("Back to List", "Index", null, new { @class = "btn btn-light"})
            </div>
        </div>
        
    </div>
</div>

    


    @section Scripts {
        @Scripts.Render("~/bundles/jqueryval")
    }
```

```
/****************************BLOG Create Page***********************************/

.blogpostCreate-Header {
    text-align: center;
    margin-top: 50px;
   
}

.blogpostCreate-Container {
    height: 750px;
    position: relative;
    border: 8px solid var(--main-color--light);
    padding: 10px;
    margin-top: 100px;
    margin-bottom: 500px;
    color: var(--secondary-color);
    width: auto;
}

.blogpostCreate-FormHeader {
    text-align: center;
    margin-top: 10px;
   
}

.blogpostCreate-Form {
   padding: 10px;
   margin: 5px;
  
}

/*customizations for text boxes in form*/
.blogpostCreate-Form input[type=text], .blogpostCreate-Form input[type=datetime] {
    background-color: whitesmoke;
    margin: 5px 0 22px 0;
    padding: 15px;
    display: inline-block;
    color: var(--secondary-color--dark);
}

/*customizations for text boxes in form when clicked*/
.blogpostCreate-Form input[type=text]:focus, .blogpostCreate-Form input[type=datetime]:focus {
    background-color: white;
    border: 2px solid var(--main-color--light);
    color: var(--secondary-color--dark);
}

/****buttons****/
/*customized bootstrap buttons, all buttons in this class in blogpostCreate-Container will be affected by this styling*/
.blogpostCreate-Container .btn-default {
    background-color: var(--main-color);
    border-radius: 8px;
    color: white;
    width: 125px;
}

.blogpostCreate-Container .btn-light {
    border-radius: 8px;
    width: 125px;
    color: var(--secondary-color--dark);
}
/****************************End of BLOG Create Page***********************************/
```
