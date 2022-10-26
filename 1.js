/**
[rewrite_local]
^https:\/\/ssb\.service\.888iq\.cn\/ssb-api\/api\/agent\/getUpgradeConfig url script-response-body 自己命名.js
[mitm] 
hostname = ssb.service.888iq.cn
*/

let body = $response.body;
let url = $request.url;
let obj = JSON.parse(body);

cosnt agentConfigUrl='https://ssb.service.888iq.cn/ssb-api/api/agent/getUpgradeConfig'

if(url.includes(agentConfigUrl)){
  let data=obj.data
  data.forEach(el=>{
    if(el.type===2){
      el.price=6688 
    }
  })
  body=JSON.stringify(obj)
}
$done({body})
