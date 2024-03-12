import { Button } from "primereact/button";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { hideModal } from "../../../components/modal/modalSlice";
import { APPROVE_DOCUMENT } from "../services/api";
import { useState } from "react";

export default function ApproveModalContent({docId}) {
  const dispatch = useDispatch();
  const [isLoading,setIsLoading] = useState(false)


const POST_DATA = async ()=>{
    try {
        setIsLoading(true)
        const res  = await  APPROVE_DOCUMENT(docId)

        console.log(res)

    } catch (error) {
        console.log(err)
    }finally{
        setIsLoading(false)
    }
}


  return (
    <Wrapper>
      <Text>Təsdiq etmək istədiyinizdən əminsinizmi?</Text>
      <Buttons>
        <Button
          label="Bağla"
          severity="primary"
          onClick={() => dispatch(hideModal())}
        />
        <Button label="Bəli, təsdiqlə" severity="success"  loading={isLoading}/>
      </Buttons>
    </Wrapper>
  );
}

const Buttons = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  margin-top: 16px;
`;

const Text = styled.p`
  /* font-size: 18px; */
  font-weight: 500;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
