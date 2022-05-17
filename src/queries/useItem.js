import { useQuery } from "react-query";
import axios from "../API/axios";

const queryString = require("query-string");

const handleRequest = async () => {
    console.log("Test")
    const apiGetItem = queryString.stringifyUrl({
        url: "api/getitem",
        query: {
            ukmId: 6,
            search: ``,
            kategori: "",
            size: 5,
            page: 1,
        },
    });
    const { data } = await axios.get(apiGetItem);
    console.log("Url:", apiGetItem)
    console.log("Data:", data)
    return data.data;
};

export default function useItem() {
    return useQuery(
        ["item"],
        () => handleRequest()
    );
}