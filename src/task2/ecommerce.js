////////////////////////////////////////////// Helper code, do not edit /////////////////////////////////////////
import { allIds, fetchOrderById } from "../api";

////////////////////////////////// Your code tasks is below //////////////////////////////////////////////////////
const Test = ()=>{
    const fetchAllOrders = async() => {
        const ids = allIds;
        let objects = []
        for(let i=0 ; i<ids.length;i++){
            const rec = await fetchOrderById(ids[i]);
            objects.push(rec);
        }
        return objects
        
        // .....
        //   1. TODO: fetch all ids using the "fetchOrderById" and the given ids, make it work as efficient and clean as possible.
    };
    
    const bucketOrdersByUsers = async () => {
        let ordersByUsers = {};
        let objects = await fetchAllOrders();
        for(let i=0 ; i<objects.length;i++){
            let userId = objects[i].userId;
            
           if(typeof ordersByUsers[userId] === 'undefined'){
            ordersByUsers[userId] = [objects[i].title]
           }
           else{
            ordersByUsers[userId].push(objects[i].title)
           }
        }
        //   2. TODO: using the function from section 1 you should now bucket the orders by user.
        // each key in the object (ordersByUsers) represents a userId and each value is an array of the orders of that user.
        return ordersByUsers;
    };
    
    const getLast2WeeksOrders =async () => {
        //   3. TODO: fetch all Ids and return array with only the last 2 weeks orders. make it work as efficient and clean as possible.
        let objects = await fetchAllOrders();
        var current = new Date();
        let ordersArray = []
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        for(let i=0 ; i<objects.length;i++){
            let temp = objects[i].timestamp;
           let date = new Date(temp)
           
           let calcTime = current - date;
           let difference= calcTime / (1000 * 3600 * 24);
             if(14 >= difference){
            let orderDate = date.getFullYear() + "-" +months[date.getMonth()] + "-" + date.getDate();
            let order = objects[i].title;
            let obj = {orderDate:orderDate,order:order}
            ordersArray.push(obj);
            
           }
        }
        return ordersArray
    };
    
    const bucketOrdersByDate =async () => {
        //   4. TODO: using the function from section 3 bucket the orders by date.
        // each key in the object (ordersByDate) represents a day and each value is an array of the orders in that date.
        let ordersByDate = {};
        let ordersArray = await getLast2WeeksOrders()
        for(let i=0 ; i<ordersArray.length;i++){
            let day = ordersArray[i].orderDate
            if(typeof ordersByDate[day] === 'undefined'){
                ordersByDate[day] = [ordersArray[i].order]
            }
            else{
                ordersByDate[day].push(ordersArray[i].order)
               }
        }
        return ordersByDate;
    };
    
    fetchAllOrders();
    // .then(console.log);
    
    bucketOrdersByUsers();
    // .then(console.log);
    
    getLast2WeeksOrders();
    // .then(console.log);
    
    bucketOrdersByDate();
    // .then(console.log);
    
    ////////////////////////////////////////
    return <div>

    </div>
}
export default Test
