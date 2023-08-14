# 1.AI换脸(变脸)

网站：https://faceswapper.ai/

```
    1.上传需要图片：
    https://access1.faceswapper.ai/api/FaceSwapper/Upload或
    https://faceswapper.ai/api/FaceSwapper/Upload(2个中一个，可能会变)
    请求参数：
    JSONObject jsonObject = new JSONObject();
    jsonObject.put("base64Image", imageBase64);
    jsonObject.put("base64ImageOther", base64ImageOther);
    jsonObject.put("gender", "male");
    jsonObject.put("previewIndex", -1);
    jsonObject.put("alg", "1");
    jsonObject.put("type", 13);
    jsonObject.put("isPreview", 0);
    结果：
    {"code":200,"data":{"code":"i7AZxeFO"},"msg":"Success"}
    
    2.查询换脸结果
    https://access1.faceswapper.ai/api/FaceSwapper/CheckStatus或
    https://faceswapper.ai/api/FaceSwapper/CheckStatus(2个中一个，可能会变)
    请求参数：
    JSONObject jsonObject = new JSONObject();
    jsonObject.put("code", code);
    jsonObject.put("type", 13);
    结果：
    {"code":200,"data":{"downloadUrls":["https://imglarger.com/"],"status":"waiting","type":13},"msg":"Success"}
    {"code":200,"data":{"downloadUrls":["https://access1.faceswapper.ai/swapper/results/i7AZxeFO.jpg"],"status":"success","type":13},"msg":"Success"}
    每个5秒检测一次 检测到status等于success 则换脸成功  downloadUrls为换脸结果

```

# 2.AI转动漫

官网：https://akhaliq-animeganv2.hf.space/

```
    1.上传需要转换的图片
    https://akhaliq-animeganv2.hf.space/api/queue/push/
    参数:
    JSONObject jsonObject = new JSONObject();
    jsonObject.put("fn_index", 0);
    String[] data = new String[]{imageBase64, "version 2 (\uD83D\uDD3A robustness,\uD83D\uDD3B stylization)"};
    jsonObject.put("data", data);
    jsonObject.put("action", "predict");
    jsonObject.put("session_hash", "hbdl6a50q1");
    结果：
    {"hash":"2621d8161e074e30a3347c27a15e7092","queue_position":1}
    
    2.查询转换结果
    https://akhaliq-animeganv2.hf.space/api/queue/status/
    参数：
    JSONObject jsonObject = new JSONObject();
    jsonObject.put("hash", hash);
    结果：
    {"status":"COMPLETE","data":{"data":["转换结果图片base64"],"duration":0.19521331787109375,"average_duration":0.21881863269629484}}
    每个5秒检测一次 检测到status等于COMPLETE 则转换成功  data.data是转换结果图片base64
```

# 3.AI绘画

官网：https://dream.ai/create

```
    1.获取token
    token有实效性（可1个小时采集一次），可以使用selenium 打开 https://dream.ai/create 
    监听https://identitytoolkit.googleapis.com/v1/accounts:lookup结果请求参数idToken
    请求demo代码：可见最低部分↓↓↓
    2.请求绘画
    https://paint.api.wombo.ai/api/v2/tasks
    请求头：
    HttpHeaders headers = new HttpHeaders();
    headers.add("x-app-version", "WEB-2.0.0");
    headers.add("Authorization", "bearer " + token);
    参数：
    JSONObject jsonObject = new JSONObject();
    jsonObject.put("is_premium", false);
    JSONObject input = new JSONObject();
    input.put("prompt", prompt);//绘画描述列入：Sunset cliffs
    input.put("style", style);//样式例如：80
    input.put("display_freq", 10);
    jsonObject.put("input_spec", input);
    结果：
    {"id":"06065d51-6a64-4173-b2af-10d6ec4898ea","user_id":"km3TzlVcHIQ7OESOfZtyiI8k01G2","state":"pending","input_spec":{"gen_type":"NORMAL","style":84,"prompt":"Sunset cliffs","aspect_ratio_width":960,"aspect_ratio_height":1568,"aspect_ratio":"old_vertical_ratio"},"premium":false,"created_at":"2023-08-14T04:38:14.901335Z","updated_at":"2023-08-14T04:38:15.083779","is_nsfw":false,"photo_url_list":[],"generated_photo_keys":[],"result":null}
    
    3.查询绘画结果
    get请求,无请头,无参数
    https://paint.api.wombo.ai/api/v2/tasks/6065d51-6a64-4173-b2af-10d6ec4898ea(后面参数为2中的id字段)
    
    结果：
    {"id":"06065d51-6a64-4173-b2af-10d6ec4898ea","user_id":"km3TzlVcHIQ7OESOfZtyiI8k01G2","state":"completed","input_spec":{"gen_type":"NORMAL","style":84,"prompt":"Sunset cliffs","aspect_ratio_width":960,"aspect_ratio_height":1568,"aspect_ratio":"old_vertical_ratio"},"premium":false,"created_at":"2023-08-14T04:38:14.901335Z","updated_at":"2023-08-14T04:38:20.50977","is_nsfw":false,"photo_url_list":["..."],"generated_photo_keys":["generated/06065d51-6a64-4173-b2af-10d6ec4898ea/final.jpg"],"result":{"final":"https://images.wombo.art/generated/06065d51-6a64-4173-b2af-10d6ec4898ea/final.jpg?Expires=1699187901&Signature=YFm3C-l2GjhezotahgrBxKkSgr9SMipH1tDtxLCzFHwWtBzJsAQiLXlrgWQrm9ZUHm6rB3lsTts8KHIeXBC9GuJXw-DlmKcLft1jJgq~THZGD4PVJ6Px7d9-ryh-IaFd7Mrvf4EdGZEx3DO62ahbd9WFbtFBN4l33izxoSo5o3FQ1LoZUr7xO54x1xYdcQWIMG6WZTbrdNUF7E0i2IPWqaLT1eJceILLiwYjw1Wj3gPE0mwDM3Hw6-ZIN71FQpWSkTZqx-ZKZZPwxGnDv18lyrMv1PT~Ju1b6gDzs9ntmYjY3nDZxQZ5o4qBtEZfQvvFS9~wm2XxF01p2oL17xL~vg__&Key-Pair-Id=K1ZXCNMC55M2IL"}}
    
    每个5秒检测一次 检测到state等于completed 则转换成功  result.final是转换结果图片url

```

AI绘画token获取：

```
    public static WebDriver driver = null;

    public static boolean isRunning = true;

    public static String token = "";

    public static String getTokenNet() {

        isRunning = true;
        token = "";

        if (driver == null) {
            ChromeOptions option = new ChromeOptions();
            option.addArguments("--remote-allow-origins=*");
            option.addArguments("--headless");
            // 创建驱动对象
            driver = new ChromeDriver(option);
        }

        driver = new Augmenter().augment(driver);
        DevTools devTools = ((HasDevTools) driver).getDevTools();
        devTools.createSession();
        devTools.send(Network.enable(Optional.empty(), Optional.empty(), Optional.empty()));
        // 获取Request信息
        devTools.addListener(Network.requestWillBeSent(), res -> {
            if (res.getRequest().getUrl().startsWith("https://identitytoolkit.googleapis.com/v1/accounts:lookup")) {
                Optional<String> postData = res.getRequest().getPostData();
                postData.ifPresent(data -> {
                    try {
                        //System.out.println("data:" + data);
                        JSONObject dataObject = JSONObject.parseObject(data);
                        token = dataObject.getString("idToken");
                        isRunning = false;
                    } catch (Exception ignored) {
                    }
                });
            }
        });
        driver.get("https://dream.ai/create");
        for (int i = 0; i < 10; i++) {
            try {
                TimeUnit.MILLISECONDS.sleep(1000);
            } catch (InterruptedException ignored) {
            }
            if (!isRunning) {
                return token;
            }
        }
        return token;
    }
```


