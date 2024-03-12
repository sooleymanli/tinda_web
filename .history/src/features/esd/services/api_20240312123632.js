import instance from "../../../api/agent";



const GET_CASH_ORDER_DOCUMENT_BY_ID = async (id)=>{

    const res = await instance.get("DocumentManagement/GetCashOrderDocumentById?docId=")
}
