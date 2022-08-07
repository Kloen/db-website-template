function navigate(path) {
    NProgress.start()
    fetch(path, {
        method: "GET",
        headers: {"is-headless": "true"}
    }).then(r => r.text()).then(page => {
        const routerView = document.querySelector('#router-view');
        routerView.innerHTML = page
        window.Alpine?.initTree(routerView);
        window.history.pushState(null, "", path);
        NProgress.done()
    });
}

document.addEventListener('alpine:init', () => {
    Alpine.directive('route', (el, { expression }) => {
        el.addEventListener("click", function(){navigate(expression)}, false);
    })
})
