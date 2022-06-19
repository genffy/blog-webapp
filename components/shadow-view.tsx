const ShadowView = ({ children }: any) => {
    const attachShadow = (host: HTMLDivElement) => {
        if (!host || !host.shadowRoot) {
            return;
        }
        host.attachShadow({ mode: "open" });
        host.shadowRoot.innerHTML = host.innerHTML;
        host.innerHTML = "";
    }
    return <div ref={attachShadow}>
        {children}
    </div>
}
export default ShadowView