export let products = [
    // Cakes
    { _code: "P001", _description: "Chocolate Cake", _category: "Cake", _unitPrice: 20.00, _qtyOnHand: 40, _image: "https://www.labonelfinebaking.shop/wp-content/uploads/2021/02/CLASSIC-CHOCOLATE-CAKE.jpg" },
    { _code: "P002", _description: "Vanilla Cupcake", _category: "Cake", _unitPrice: 5.00, _qtyOnHand: 100, _image: "https://hips.hearstapps.com/del.h-cdn.co/assets/18/07/1518475314-vanilla-cupcake-horizontal-.jpg?crop=0.667xw:1.00xh;0.199xw,0&resize=1200:*" },
    { _code: "P003", _description: "Strawberry Tart", _category: "Cake", _unitPrice: 12.00, _qtyOnHand: 25, _image: "https://static.toiimg.com/thumb/55435839.cms?width=1200&height=900" },
    { _code: "P004", _description: "Lemon Cheesecake", _category: "Cake", _unitPrice: 15.00, _qtyOnHand: 30, _image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYhIH3gaoVMTsWxza5WuBAJlVJUJJGVpCi6w&s" },
    { _code: "P005", _description: "Carrot Cake", _category: "Cake", _unitPrice: 18.00, _qtyOnHand: 20, _image: "https://www.rainbownourishments.com/wp-content/uploads/2023/03/vegan-carrot-cake-1.jpg" },
    { _code: "P006", _description: "Red Velvet Cake", _category: "Cake", _unitPrice: 22.00, _qtyOnHand: 15, _image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrw5Aqhuo-gAqBJp9HsA1NUUcAUIYE76EPIA&s" },
    { _code: "P007", _description: "Blueberry Muffin", _category: "Cake", _unitPrice: 8.00, _qtyOnHand: 60, _image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxwriYjJ0IX6I9kkpo0rDCDzPff-GrkSX4zw&s" },
    { _code: "P008", _description: "Apple Pie", _category: "Cake", _unitPrice: 25.00, _qtyOnHand: 10, _image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmQ7JyEum073tMWX4Nt9nahFPEcmKmdGvlhg&s" },

    // Drinks
    { _code: "P010", _description: "Coca Cola", _category: "Drink", _unitPrice: 1.50, _qtyOnHand: 50, _image: "https://m.media-amazon.com/images/I/61SISUGCDYL.jpg" },
    { _code: "P011", _description: "Orange Juice", _category: "Drink", _unitPrice: 2.00, _qtyOnHand: 30, _image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpuPT2kHlySahkVTfGmkIglZkSN3v_x-r_3g&s" },
    { _code: "P012", _description: "Lemonade", _category: "Drink", _unitPrice: 1.75, _qtyOnHand: 20, _image: "https://fromfoodiewithlove.com/wp-content/uploads/2023/01/Fresh-Squeezed-Lemonade.jpg" },
    { _code: "P013", _description: "Iced Tea", _category: "Drink", _unitPrice: 1.50, _qtyOnHand: 15, _image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKWGOomQcO0wHDOFshx1LdtoiGvP9M6bVPtg&s" },

    // Cookies
    { _code: "P014", _description: "Ginger Bread Cookies", _category: "Cookie", _unitPrice: 1.00, _qtyOnHand: 80, _image: "https://theglutenfreeaustrian.com/wp-content/uploads/2022/12/gingerbreadcookie10-720x720.jpg" },
    { _code: "P015", _description: "Crinkle Cookies", _category: "Cookie", _unitPrice: 1.25, _qtyOnHand: 60, _image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqkum53vE-mImZ-QZ9U3pZx7Ysx4QmMMLRRQ&s" }


];


export let customers = [
    { _id: "C001", _name: "William Defoe", _email: "william@example.com", _phone: "12312312", _address: "123 Street" },
    { _id: "C002", _name: "Jane Smith", _email: "jane@example.com", _phone: "45645645", _address: "456 Avenue" },
    { _id: "C003", _name: "Tom Hardy", _email: "tom@example.com", _phone: "78978978", _address: "789 Boulevard" },
    { _id: "C004", _name: "Emily Blunt", _email: "emily@example.com", _phone: "11223344", _address: "112 Street" },
    { _id: "C005", _name: "Scarlett Johansson", _email: "scarlett@example.com", _phone: "22334455", _address: "223 Avenue" },
    { _id: "C006", _name: "Chris Hemsworth", _email: "chris@example.com", _phone: "33445566", _address: "334 Boulevard" },
    { _id: "C007", _name: "Robert Downey", _email: "robert@example.com", _phone: "44556677", _address: "445 Road" },
    { _id: "C008", _name: "Natalie Portman", _email: "natalie@example.com", _phone: "55667788", _address: "556 Lane" }
];


export let users = [
    { _id: "U001", _username: "admin", _email: "example.com", _password: "admin" },
    { _id: "U002", _username: "user", _email: "example.com", _password: "user" },
    { _id: "U003", _username: "manager", _email: "example.com", _password: "manager" }
];

const orders = [
    {
        _invoice_id: "I001",
        _order_date: "11/2/2024",
        _order_time: "3:14:31 AM",
        _user_id: "U001",
        _payment_method: "Cash",
        _sub_total: 63,
        _service_tax: 3.78,
        _total_price: 66.78,
        _cash_amount: 70,
        _balance: 3.22,
        _order_items: [
            { id: "P002", title: "Vanilla Cupcake", price: 5, quantity: 3, totalPrice: "15.00" },
            { id: "P003", title: "Strawberry Tart", price: 12, quantity: 4, totalPrice: "48.00" },
            { id: "P004", title: "Lemon Cheesecake", price: 15, quantity: 1, totalPrice: "15.00" }
        ]
    },
    {
        _invoice_id: "I002",
        _order_date: "11/3/2024",
        _order_time: "1:45:12 PM",
        _user_id: "U002",
        _payment_method: "Card",
        _sub_total: 85,
        _service_tax: 5.1,
        _total_price: 90.1,
        _cash_amount: 100,
        _balance: 9.9,
        _order_items: [
            { id: "P005", title: "Chocolate Cake", price: 20, quantity: 2, totalPrice: "40.00" },
            { id: "P006", title: "Macaron Pack", price: 15, quantity: 3, totalPrice: "45.00" }
        ]
    },
    {
        _invoice_id: "I003",
        _order_date: "11/4/2024",
        _order_time: "5:30:00 PM",
        _user_id: "U003",
        _payment_method: "Cash",
        _sub_total: 50,
        _service_tax: 3,
        _total_price: 53,
        _cash_amount: 60,
        _balance: 7,
        _order_items: [
            { id: "P007", title: "Blueberry Muffin", price: 10, quantity: 3, totalPrice: "30.00" },
            { id: "P008", title: "Red Velvet Cake", price: 20, quantity: 1, totalPrice: "20.00" }
        ]
    },
    {
        _invoice_id: "I004",
        _order_date: "11/6/2024",
        _order_time: "8:15:45 PM",
        _user_id: "U004",
        _payment_method: "Card",
        _sub_total: 100,
        _service_tax: 6,
        _total_price: 106,
        _cash_amount: 110,
        _balance: 4,
        _order_items: [
            { id: "P009", title: "Cinnamon Roll", price: 10, quantity: 5, totalPrice: "50.00" },
            { id: "P010", title: "Banana Bread", price: 25, quantity: 2, totalPrice: "50.00" }
        ]
    },
    {
        _invoice_id: "I005",
        _order_date: "11/8/2024",
        _order_time: "10:00:00 AM",
        _user_id: "U005",
        _payment_method: "Cash",
        _sub_total: 120,
        _service_tax: 7.2,
        _total_price: 127.2,
        _cash_amount: 130,
        _balance: 2.8,
        _order_items: [
            { id: "P011", title: "Carrot Cake", price: 30, quantity: 2, totalPrice: "60.00" },
            { id: "P012", title: "Pumpkin Pie", price: 30, quantity: 2, totalPrice: "60.00" }
        ]
    },
    {
        _invoice_id: "I006",
        _order_date: "11/9/2024",
        _order_time: "12:00:00 PM",
        _user_id: "U006",
        _payment_method: "Card",
        _sub_total: 95,
        _service_tax: 5.7,
        _total_price: 100.7,
        _cash_amount: 110,
        _balance: 9.3,
        _order_items: [
            { id: "P013", title: "Apple Pie", price: 25, quantity: 2, totalPrice: "50.00" },
            { id: "P014", title: "Chocolate Chip Cookies", price: 15, quantity: 3, totalPrice: "45.00" }
        ]
    },
    {
        _invoice_id: "I007",
        _order_date: "11/10/2024",
        _order_time: "2:30:00 PM",
        _user_id: "U007",
        _payment_method: "Cash",
        _sub_total: 80,
        _service_tax: 4.8,
        _total_price: 84.8,
        _cash_amount: 90,
        _balance: 5.2,
        _order_items: [
            { id: "P015", title: "Vanilla Pudding", price: 20, quantity: 2, totalPrice: "40.00" },
            { id: "P016", title: "Brownies", price: 20, quantity: 2, totalPrice: "40.00" }
        ]
    }
];

// Save the sample data to localStorage
// localStorage.setItem('orders', JSON.stringify(orders));



(function storeArrays() {
    if (!localStorage.getItem("products")) {
        localStorage.setItem("products", JSON.stringify(products));
    }
    if (!localStorage.getItem("customers")) {
        localStorage.setItem("customers", JSON.stringify(customers));
    }
    if (!localStorage.getItem("users")) {
        localStorage.setItem("users", JSON.stringify(users));
    }
})();

export function loadArrays() {
    console.log("load arrays");
    products = JSON.parse(localStorage.getItem("products"));
    customers = JSON.parse(localStorage.getItem("customers"));
    users = JSON.parse(localStorage.getItem("users"));
}