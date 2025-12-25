import "./TagButtonStyle.css";

export default function TagButton({ title, children }) {

    return (
        <div>
            {/* الشرط الصحيح */}
            {title == null || title === "" ? <div></div> : (
                <button className="tagButton">
                    {title}
                    {children}
                </button>
            )}
        </div>
    );
}
