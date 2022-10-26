// const url = "https://example.com/";
// const method = "POST";
// const headers = {"Field": "test-header-param"};
// const data = {"info": "abc"};

// const myRequest = {
//     url: url,
//     method: method, // Optional, default GET.
//     headers: headers, // Optional.
//     body: JSON.stringify(data) // Optional.
// };

// $task.fetch(myRequest).then(response => {
//     // response.statusCode, response.headers, response.body
//     console.log(response.body);
//     $notify("Title", "Subtitle", response.body); // Success!
//     $done();
// }, reason => {
//     // reason.error
//     $notify("Title", "Subtitle", reason.error); // Error!
//     $done();
// });


// [rewrite_local]
// ^https:\/\/ssb\.service\.888iq\.cn\/ssb-api\/api\/agent\/getUpgradeConfig url script-response-body 自己命名.js
// [mitm] 
// hostname = ssb.service.888iq.cn


let body = $response.body;
let url = $request.url;
let obj = JSON.parse(body);

const agentConfigUrl='https://ssb.service.888iq.cn/ssb-api/api/agent/getUpgradeConfig'


if(url.includes(agentConfigUrl)){
  console.log(body)
  obj.data.forEach(el=>{
    if(el.type===2){
      el.description="没想到吧，被我改掉了"
      el.price=6688 
    }
  })
  $notify("测试", "test", obj)
  
  body=JSON.stringify(obj)
}
$done({body})
