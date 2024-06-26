import './FloatLabel.scss';

export default function FloatLabel({ label, name, type, value, onChange }) {
    return (
        <div className="float-label">
            <label>{label}</label>
            <input autocomplete="off" type={type} name={name} value={value} onChange={onChange} />
        </div>
    );
}