
import blocksStyles from '@/styles/blocks.module.css';
import Web3 from 'web3'
import { ERC20, tokenAddresses } from './constants'

const Reward = ({ articles }: any) => {
  function requestEth() {
    // 检测是否安装
      if(typeof window !== 'undefined'){
        // @ts-ignore
        if(window && window.ethereum){
          window.ethereum.request({ method: 'eth_requestAccounts' }).then((res: any)=>{
            // 判断是否连接以太
            const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
            //如果用户同意了登录请求，你就可以拿到用户的账号
            const defaultAccount = res[0];
            web3.eth.getBalance(defaultAccount).then(res=>{
              const num = web3.utils.fromWei(res)
              console.log(res, num);
            })
            tokenAddresses.forEach(async (item)=>{
              const contract = new web3.eth.Contract(ERC20, item.address);
              const tokenBalance = await contract.methods.balanceOf(defaultAccount).call();
              console.log('tokenBalance', `${item.token}: ${web3.utils.fromWei(tokenBalance)}`)
            })
          }).catch((err: any)=>{
            console.log(err);
          });
        } else {
          alert('请安装钱包')
        }  
      }
  }
  return (
    <div className={blocksStyles.reward}>
      {/* <button className="uk-button uk-button-link" data-uk-toggle="target: #modal-example" onClick={requestEth}><span data-uk-icon="icon: heart;"></span></button> */}
      <button className="uk-button uk-button-link" onClick={requestEth}><span data-uk-icon="icon: heart;">点赞</span></button>
      <div id="modal-example" data-uk-modal>
        <div className="uk-modal-dialog uk-modal-body">
          <h2 className="uk-modal-title">Headline</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p className="uk-text-right">
            <button className="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
            <button className="uk-button uk-button-primary" type="button">Save</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reward;