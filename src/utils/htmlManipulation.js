export function appendExternalScript(addr) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = addr;
    script.async = true;
    document.body.appendChild(script);
    return () => {
        document.body.removeChild(script);
    }
}

export function appendInternalScript(command) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = command;
    document.body.appendChild(script);
    return () => {
        document.body.removeChild(script);
    }
}
