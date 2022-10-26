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
  console.log(obj)
  $done()
}
