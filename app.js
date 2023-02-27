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

    const $body = $('body')
    $body.css('background-color', 'rgb(240, 248, 255)')

    $('#darkButton').on('click', () => {
        $body.css('background-color', '#4e4880')
        $('#darkMode').css('display', 'none')
        $('#lightMode').css('display', 'block')
        console.log('Dark');
    })

    $('#lightButton').on('click', () => {
        $body.css('background-color', 'f0f8ff')
        $('#darkMode').css('display', 'block')
        $('#lightMode').css('display', 'none')
        console.log('Light');
    })

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

