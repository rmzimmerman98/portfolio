$(() => {

    const $openHome = $('#home')
    const $openBio = $('#bio')
    const $openResume = $('#resume')
    const $openProjects = $('#projects')
    // I definitely know this is not dry, but that can be fixed up later
    $('#homeButton').on('click', () => {
        $openHome.css('display', 'block')
        $openBio.css('display', 'none')
        $openResume.css('display', 'none')
        $openProjects.css('display', 'none')
    })
    
    $('#bioButton').on('click', () => {
        $openHome.css('display', 'none')
        $openBio.css('display', 'block')
        $openResume.css('display', 'none')
        $openProjects.css('display', 'none')
    })
    
    $('#resumeButton').on('click', () => {
        $openHome.css('display', 'none')
        $openBio.css('display', 'none')
        $openResume.css('display', 'block')
        $openProjects.css('display', 'none')
    })
    
    $('#projectsButton').on('click', () => {
        $openHome.css('display', 'none')
        $openBio.css('display', 'none')
        $openResume.css('display', 'none')
        $openProjects.css('display', 'block')
    })

    $('#darkButton').on('click', () => {
        $('body').toggleClass('dark')
        // $('#darkMode').css('display', 'none')
        // $('#lightMode').css('display', 'block')
        // console.log('Dark');
    })

    // $('#lightButton').on('click', () => {
    //     $('body').removeClass('dark')
    //     $('#darkMode').css('display', 'block')
    //     $('#lightMode').css('display', 'none')
    //     console.log('Light');
    // })

    const $openButton = $('#linksButton') 
    const $modal = $('#modal')
    const $closeButton = $('#close')

    const openModal = () => {
        $modal.css('display', 'block') 
    }

    $openButton.on('click', openModal)

    const closeModal = () => {
        $modal.css('display', 'none')
    }

    $closeButton.on('click', closeModal)
})

