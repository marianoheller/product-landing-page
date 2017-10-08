document.addEventListener('DOMContentLoaded', function () {
    
    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
        
        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
            // Get the target from the "data-target" attribute
            var target = $el.dataset.target;
            var $target = document.getElementById(target);

            $el.addEventListener('click', function () {
                // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                $el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });

            //Y esto lo agrego yo asi se cierra cada vez q clickeo un item del burger
            $target.addEventListener('click', function () {
                $el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });

        
    }
    
});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});


function submitContact() {
    return false;
}
