
    $(document).ready(function () {
        // create function that opens modal and identifies the unique modal with the parameter blogId 
        function onOpenModal(blogId) {
            $("#deleteModal-" + blogId).modal("show");
        }
        //create function that closes modal identified with the parameter blogId
        function onCloseModal(blogId) {
            $("#deleteModal-" + blogId).modal('hide');
        }

        //create function that takes the blogId parameter to identify which blog will be deleted
        function onDeleteBlog(blogId) {

            $.ajax({ //ajax call used to update the web page without reloading the page
                url: './BlogPosts/AsyncDeleteBlog/'+ blogId, //uses actionmethod to delete blog identified by blogId
                type: 'POST',
                success: function () { //when call is a success
                    $("#deleteModal-" + blogId).modal('hide'); //modal closes by hiding
                    alertSuccess("The blog post was deleted successfully"); //alertSuccess function is called to display message
                    $("#blog-" + blogId).remove(); //blog post is removed from DOM
                }

            });
    }
    //create function that displays alert message for 3 seconds and scrolls the window to the top
    function alertSuccess(message) {
        $('#alerts').append(
            '<div class="alert alert-success alert-dismissible fade show" role="alert"> ' +
            message + ' ' + '<i class="fa fa-check"></i></div>');
    window.scrollTo(0, 0);
    window.setTimeout(function () {
        $(".alert").fadeTo(500, 0).slideUp(500, function () {
            $(this).remove();
        });
                }, 3000);
    }
    
    // create object called BlogController and assigned it to window so they will be visible to onclick handlers in the div container in .cshtml
    window.BlogController = {
        onOpenModal,
        onCloseModal,
        onDeleteBlog
    }
    });


