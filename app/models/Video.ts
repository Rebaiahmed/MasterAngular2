

export class Video{
    constructor(public videoId:string, public title:string,
    public thumbnailUrl : string, public channelTitle : string,
    public channelId: string,
    public description : string,public publishedAt:string)
    {
           this.videoId = videoId;
    this.title = title;
    this.thumbnailUrl = thumbnailUrl;
    this.channelTitle = channelTitle;
    this.channelId = channelId;
    this.publishedAt = publishedAt;
this.description = description;

/*
{ "kind": "youtube#searchResult", "etag": "\"gMxXHe-zinKdE9lTnzKu8vjcmDI/yVdXvi1B6tWU_5M2xvc4_Cvl7Ms\"", "id": { "kind": "youtube#video", "videoId": "ZrDI4E471NU" }, "snippet": { "publishedAt": "2013-03-30T12:10:11.000Z", "channelId": "UCkmlQS9oxkIhgYUm-oFoHzA", "title": "[Rap Tunisien] Guito'n - Takhallof راب تونسي ـ تخلف", "description": "", "thumbnails": { "default": { "url": "https://i.ytimg.com/vi/ZrDI4E471NU/default.jpg", "width": 120, "height": 90 }, "medium": { "url": "https://i.ytimg.com/vi/ZrDI4E471NU/mqdefault.jpg", "width": 320, "height": 180 }, "high": { "url": "https://i.ytimg.com/vi/ZrDI4E471NU/hqdefault.jpg", "width": 480, "height": 360 } }, "channelTitle": "Miro Sfax", "liveBroadcastContent": "none" } } */

    }
}