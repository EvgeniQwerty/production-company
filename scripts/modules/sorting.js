///////////////////////////////////////////////////////////////////
//sorting start

export function onLinkClick(event) {
    const projects = document.querySelectorAll('.project');

    const target = event.target;
    const sort = target.getAttribute('data-sort');

    if (sort !== 'all' && sort !== 'all-photo' && sort !== 'all-video') {
        for (let project of projects) {
            if (project.getAttribute('data-sort') !== sort) {
                project.classList.add('display-none');
            } else {
                project.classList.remove('display-none');
            }
        }
    } else {
        if (sort === 'all') {
            for (let project of projects) {
                project.classList.remove('display-none');
            }
        } else if (sort === 'all-video') {
            for (let project of projects) {
                console.log(project);
                if (project.classList.contains('project_video')) {
                    project.classList.remove('display-none');
                } else {
                    project.classList.add('display-none');
                }
            }
        } else if (sort === 'all-photo') {
            for (let project of projects) {
                if (project.classList.contains('project_photo')) {
                    project.classList.remove('display-none');
                } else {
                    project.classList.add('display-none');
                }
            }
        }
    }
}
//sorting end
