import instance from "../../../api/agent";

const GET_CASH_ORDER_DOCUMENT_BY_ID = async (id) => {
  const res = await instance.get(
    `DocumentManagement/GetCashOrderDocumentById?docId=${id}`
  );
  return res.data;
};
const REJECT_DOCUMENT = async (id,reason) => {
  const res = await instance.post(
    `DocumentManagement/RejectDocument?docId=${id}&rejectReason=${reason}`
  );
  return res.data;
};

const CANCEL_DOCUMENT = async (id,reason) => {
  const res = await instance.post(
    `DocumentManagement/CancelDocument?docId=${id}&rejectReason=${reason}`
  );
  return res.data;
};
const APPROVE_DOCUMENT = async (id,reason) => {
  const res = await instance.post(
    `DocumentManagement/ApproveDocument?docId=1${id}`
  );
  return res.data;
};
export { GET_CASH_ORDER_DOCUMENT_BY_ID };
