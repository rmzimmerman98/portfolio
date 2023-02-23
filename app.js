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

