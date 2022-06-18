
export default function WalletCheck({ connectWalletHandler, buttonText, walletConnected, checkSpiceHandler }: Props) {
    console.log(walletConnected);
    return (
        <div className="WalletCheck">
            <div style={{marginTop: "15rem"}}>
            <div className='HeaderText' >
                Dolkoroth
            </div>
            <div className='TinyHeader' style={{marginLeft: "8rem", marginTop: "-1.5rem", marginBottom: "6rem"}}>
                Series Bible
            </div>
            {/* <div style={{marginTop: "2rem", marginBottom: "6rem"}}>A SpiceDAO Production</div> */}
            </div>
        </div>
    )
}

