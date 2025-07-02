import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { placeOrder } from "@/store/cartSlice";
import countries from "@/assets/data/countries/countries";

export const useCheckout = () => {
  const [selectedCountry, setSelectedCountry] = useState({
    code: "",
    name: "",
  });
  const [selectedMethod, setSelectedMethod] = useState("bank");
  const [add, setAdd] = useState({});

  const cartItems = useSelector((state) => state.cart.items);
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const orderedItems = useSelector((state) => state.cart.orderedItems);
  const dispatch = useDispatch();
  const orderedSubtotal = orderedItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const orderedTotalQuantity = orderedItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    street: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const formRef = useRef();

  const validate = () => {
    let newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "Provide Your First Name";
    if (!formData.lastName.trim())
      newErrors.lastName = "Provide Your Last Name";
    if (!formData.street.trim())
      newErrors.street = "Provide Your Street Address";
    if (!formData.city.trim()) newErrors.city = "Provide Your City Name";
    if (!formData.zipCode.trim()) newErrors.zipCode = "Provide Your Zip Code";
    if (!formData.phone.trim()) newErrors.phone = "Provide Your Phone Number";
    if (!formData.email.trim()) {
      newErrors.email = "Provide Your Email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    setSuccessMessage("ORDER HAS BEEN PLACED");
    setFormData({
      firstName: "",
      lastName: "",
      companyName: "",
      street: "",
      city: "",
      zipCode: "",
      phone: "",
      email: "",
      message: "",
    });

    setErrors({});
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setOrderPlaced(true);
      dispatch(placeOrder());
    }, 2000);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { longitude, latitude } = position.coords;
      const api = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
      fetch(api)
        .then((res) => res.json())
        .then((data) => setAdd(data.address));
    });
  }, []);

  useEffect(() => {
    if (add?.country) {
      const matchedCountry = countries.find(
        (c) => c.name.toLowerCase() === add.country.toLowerCase()
      );
      if (matchedCountry) {
        setSelectedCountry(matchedCountry);
      }
    }
  }, [add]);

  return {
    selectedCountry,
    setSelectedCountry,
    selectedMethod,
    setSelectedMethod,
    formData,
    setFormData,
    formRef,
    errors,
    successMessage,
    loading,
    orderPlaced,
    handleSubmit,
    subtotal,
    cartItems,
    totalQuantity,
    orderedItems,
    orderedSubtotal,
    orderedTotalQuantity,
  };
};
