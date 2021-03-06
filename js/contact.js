console.log('It works')

$(document).ready(function() {
    $('.submit').click(function(event) {
        console.log('Clicked')

        var firstname = $('.fname').val()
        var lastname = $('.lname').val()
        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var statusElm = $('.status')

        statusElm.empty()

        if (firstname.length > 2) {
            statusElm.append('<div>FirstName is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>FirstName is not valid</div>')
        }

        if (lastname.length > 2) {
            statusElm.append('<div>LastName is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>LastName is not valid</div>')
        }

        if (email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElm.append('<div>Email is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Email is not valid</div>')
        }

        if (subject.length > 2) {
            statusElm.append('<div>Subject is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Subject is not valid</div>')
        }

        if (message.length > 20) {
            statusElm.append('<div>Message is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Message is not valid</div>')
        }

    })
})