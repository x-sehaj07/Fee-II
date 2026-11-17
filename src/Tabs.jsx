function Tabs(){
    const [activeTab,setActivetab]=useState("");
    return(
        <>

        <div className="tabs-container">
            <h2>Student Dashboard</h2>
            <div className="tabs">
                <button onClick={()=>setActivetab("profile")}>Profile</button>
                <button onClick={()=>setActivetab("courses")}>Courses</button>
                <button onClick={()=>setActivetab("result")}>Result</button>
            </div>
        </div>
        </>
    )
}
export default Tabs;