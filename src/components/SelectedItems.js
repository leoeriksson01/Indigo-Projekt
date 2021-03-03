import style from '../css/CheckoutPage.module.css'

const SelectedItems = () => {
  return (
    <div>
      <div className={style.selectedItems}>
        <p>uno item</p>
      </div>
      <div className={style.selectedItems}>
        <p>dos item</p>
      </div>
    </div>
  );
}

export default SelectedItems;