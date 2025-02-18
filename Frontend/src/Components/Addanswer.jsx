const Addanswer = ({knowsAnswer, ansData, isSubmitting,isAccepted,setansData}) =>{
    return(
        <>
        {knowsAnswer && (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold mb-4">Submit Your Answer</h2>
              
                <div>
                  <label className="block text-sm font-medium mb-1">Your Answer</label>
                  <textarea
                    value={ansData.content}
                    onChange={(e) => setansData(prev => ({...prev, content: e.target.value}))}
                    className="w-full px-3 py-2 border rounded-md min-h-[150px]"
                    required
                  />
                </div>
    
               
    
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={ansData.isAccepted}
                    onChange={(e) => setansData(prev => ({...prev, isAccepted: e.target.checked}))}
                    className="form-checkbox"
                  />
                  <span className="ml-2">Mark as accepted answer</span>
                </label>
    
                
             
            </div>
          )} </>
    );

}
export default Addanswer;