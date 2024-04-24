import { useModal } from "./ui/useModal";

const useModalCloseHandler = () => {
  const { DaengModal } = useModal();

  /**
   * DaengModal.fire를 닫는 함수 입니다. 컴포넌트의 modalId를 인자로 넣고
   * onclick에 함수만 입력하면 됩니다 
   * e.g)
   * <button onclick={()=>{clickModalCloseHandler(modalId)}} />
   * @param modalId 
   */
  const clickModalCloseHandler = (modalId: string) => {
    DaengModal.hide(modalId ?? '');
  }
 return {clickModalCloseHandler}
}

export default useModalCloseHandler