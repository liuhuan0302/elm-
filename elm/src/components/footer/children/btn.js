import "../../../assets/css/footer/footer.css"
export default function btn(item){
    return(
        <li>
            <Icon type="twitter" style={{ fontSize: ".4rem", color: "gray" }} />
            <span>{this.props.item}</span>
        </li>
    )
}