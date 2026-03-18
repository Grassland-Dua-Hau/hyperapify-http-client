export const SDK_URL_MAP = new Map<string, string>([
  ['healthCheckApiV1HealthCheckGet', '/api/v1/health/check'],
  ['fetchPostDetailApiV1TiktokWebFetchPostDetailGet', '/api/v1/tiktok/web/fetch_post_detail'],
  [
    'fetchPostDetailV2ApiV1TiktokWebFetchPostDetailV2Get',
    '/api/v1/tiktok/web/fetch_post_detail_v2',
  ],
  ['fetchExplorePostApiV1TiktokWebFetchExplorePostGet', '/api/v1/tiktok/web/fetch_explore_post'],
  ['fetchTrendingPostApiV1TiktokWebFetchTrendingPostGet', '/api/v1/tiktok/web/fetch_trending_post'],
  [
    'fetchTrendingSearchwordsApiV1TiktokWebFetchTrendingSearchwordsGet',
    '/api/v1/tiktok/web/fetch_trending_searchwords',
  ],
  ['fetchUserProfileApiV1TiktokWebFetchUserProfileGet', '/api/v1/tiktok/web/fetch_user_profile'],
  ['fetchUserPostApiV1TiktokWebFetchUserPostGet', '/api/v1/tiktok/web/fetch_user_post'],
  ['fetchUserRepostApiV1TiktokWebFetchUserRepostGet', '/api/v1/tiktok/web/fetch_user_repost'],
  ['fetchUserLikeApiV1TiktokWebFetchUserLikeGet', '/api/v1/tiktok/web/fetch_user_like'],
  ['fetchUserCollectApiV1TiktokWebFetchUserCollectGet', '/api/v1/tiktok/web/fetch_user_collect'],
  [
    'fetchUserPlayListApiV1TiktokWebFetchUserPlayListGet',
    '/api/v1/tiktok/web/fetch_user_play_list',
  ],
  ['fetchUserMixApiV1TiktokWebFetchUserMixGet', '/api/v1/tiktok/web/fetch_user_mix'],
  ['fetchPostCommentApiV1TiktokWebFetchPostCommentGet', '/api/v1/tiktok/web/fetch_post_comment'],
  [
    'fetchPostCommentReplyApiV1TiktokWebFetchPostCommentReplyGet',
    '/api/v1/tiktok/web/fetch_post_comment_reply',
  ],
  ['fetchUserFansApiV1TiktokWebFetchUserFansGet', '/api/v1/tiktok/web/fetch_user_fans'],
  ['fetchUserFollowApiV1TiktokWebFetchUserFollowGet', '/api/v1/tiktok/web/fetch_user_follow'],
  [
    'fetchUserLiveDetailApiV1TiktokWebFetchUserLiveDetailGet',
    '/api/v1/tiktok/web/fetch_user_live_detail',
  ],
  [
    'fetchGeneralSearchApiV1TiktokWebFetchGeneralSearchGet',
    '/api/v1/tiktok/web/fetch_general_search',
  ],
  [
    'fetchSearchKeywordSuggestApiV1TiktokWebFetchSearchKeywordSuggestGet',
    '/api/v1/tiktok/web/fetch_search_keyword_suggest',
  ],
  ['fetchSearchUserApiV1TiktokWebFetchSearchUserGet', '/api/v1/tiktok/web/fetch_search_user'],
  ['fetchSearchVideoApiV1TiktokWebFetchSearchVideoGet', '/api/v1/tiktok/web/fetch_search_video'],
  ['fetchSearchLiveApiV1TiktokWebFetchSearchLiveGet', '/api/v1/tiktok/web/fetch_search_live'],
  ['fetchSearchPhotoApiV1TiktokWebFetchSearchPhotoGet', '/api/v1/tiktok/web/fetch_search_photo'],
  ['fetchTagDetailApiV1TiktokWebFetchTagDetailGet', '/api/v1/tiktok/web/fetch_tag_detail'],
  ['fetchTagPostApiV1TiktokWebFetchTagPostGet', '/api/v1/tiktok/web/fetch_tag_post'],
  ['fetchHomeFeedApiV1TiktokWebFetchHomeFeedPost', '/api/v1/tiktok/web/fetch_home_feed'],
  [
    'generateRealMsTokenApiV1TiktokWebGenerateRealMsTokenGet',
    '/api/v1/tiktok/web/generate_real_msToken',
  ],
  ['encryptStrDataApiV1TiktokWebEncryptStrDataGet', '/api/v1/tiktok/web/encrypt_strData'],
  ['decryptStrDataApiV1TiktokWebDecryptStrDataGet', '/api/v1/tiktok/web/decrypt_strData'],
  [
    'generateFingerprintApiV1TiktokWebGenerateFingerprintGet',
    '/api/v1/tiktok/web/generate_fingerprint',
  ],
  ['generateWebidApiV1TiktokWebGenerateWebidGet', '/api/v1/tiktok/web/generate_webid'],
  ['generateTtwidApiV1TiktokWebGenerateTtwidGet', '/api/v1/tiktok/web/generate_ttwid'],
  ['generateXbogusApiV1TiktokWebGenerateXbogusPost', '/api/v1/tiktok/web/generate_xbogus'],
  ['generateXgnarlyApiV1TiktokWebGenerateXgnarlyPost', '/api/v1/tiktok/web/generate_xgnarly'],
  [
    'generateXgnarlyAndXbogusApiV1TiktokWebGenerateXgnarlyAndXbogusPost',
    '/api/v1/tiktok/web/generate_xgnarly_and_xbogus',
  ],
  ['getUserIdApiV1TiktokWebGetUserIdGet', '/api/v1/tiktok/web/get_user_id'],
  ['getSecUserIdApiV1TiktokWebGetSecUserIdGet', '/api/v1/tiktok/web/get_sec_user_id'],
  ['getAllSecUserIdApiV1TiktokWebGetAllSecUserIdPost', '/api/v1/tiktok/web/get_all_sec_user_id'],
  ['getAwemeIdApiV1TiktokWebGetAwemeIdGet', '/api/v1/tiktok/web/get_aweme_id'],
  ['getAllAwemeIdApiV1TiktokWebGetAllAwemeIdPost', '/api/v1/tiktok/web/get_all_aweme_id'],
  ['getUniqueIdApiV1TiktokWebGetUniqueIdGet', '/api/v1/tiktok/web/get_unique_id'],
  ['getAllUniqueIdApiV1TiktokWebGetAllUniqueIdPost', '/api/v1/tiktok/web/get_all_unique_id'],
  ['tiktokLiveRoomApiV1TiktokWebTiktokLiveRoomGet', '/api/v1/tiktok/web/tiktok_live_room'],
  ['fetchLiveImFetchApiV1TiktokWebFetchLiveImFetchGet', '/api/v1/tiktok/web/fetch_live_im_fetch'],
  ['getLiveRoomIdApiV1TiktokWebGetLiveRoomIdGet', '/api/v1/tiktok/web/get_live_room_id'],
  [
    'fetchCheckLiveAliveApiV1TiktokWebFetchCheckLiveAliveGet',
    '/api/v1/tiktok/web/fetch_check_live_alive',
  ],
  [
    'fetchBatchCheckLiveAliveApiV1TiktokWebFetchBatchCheckLiveAliveGet',
    '/api/v1/tiktok/web/fetch_batch_check_live_alive',
  ],
  [
    'fetchTiktokLiveDataApiV1TiktokWebFetchTiktokLiveDataGet',
    '/api/v1/tiktok/web/fetch_tiktok_live_data',
  ],
  [
    'fetchLiveRecommendApiV1TiktokWebFetchLiveRecommendGet',
    '/api/v1/tiktok/web/fetch_live_recommend',
  ],
  [
    'fetchLiveGiftListApiV1TiktokWebFetchLiveGiftListGet',
    '/api/v1/tiktok/web/fetch_live_gift_list',
  ],
  [
    'fetchSsoLoginQrcodeApiV1TiktokWebFetchSsoLoginQrcodeGet',
    '/api/v1/tiktok/web/fetch_sso_login_qrcode',
  ],
  [
    'fetchSsoLoginStatusApiV1TiktokWebFetchSsoLoginStatusGet',
    '/api/v1/tiktok/web/fetch_sso_login_status',
  ],
  [
    'fetchSsoLoginAuthApiV1TiktokWebFetchSsoLoginAuthGet',
    '/api/v1/tiktok/web/fetch_sso_login_auth',
  ],
  ['generateHashedIdApiV1TiktokWebGenerateHashedIdGet', '/api/v1/tiktok/web/generate_hashed_id'],
  [
    'fetchGiftNameByIdApiV1TiktokWebFetchGiftNameByIdPost',
    '/api/v1/tiktok/web/fetch_gift_name_by_id',
  ],
  [
    'fetchGiftNamesByIdsApiV1TiktokWebFetchGiftNamesByIdsPost',
    '/api/v1/tiktok/web/fetch_gift_names_by_ids',
  ],
  [
    'fetchTiktokWebGuestCookieApiV1TiktokWebFetchTiktokWebGuestCookieGet',
    '/api/v1/tiktok/web/fetch_tiktok_web_guest_cookie',
  ],
  ['deviceRegisterApiV1TiktokWebDeviceRegisterGet', '/api/v1/tiktok/web/device_register'],
  ['fetchOneVideoApiV1TiktokAppV3FetchOneVideoGet', '/api/v1/tiktok/app/v3/fetch_one_video'],
  ['fetchOneVideoV2ApiV1TiktokAppV3FetchOneVideoV2Get', '/api/v1/tiktok/app/v3/fetch_one_video_v2'],
  ['fetchOneVideoV3ApiV1TiktokAppV3FetchOneVideoV3Get', '/api/v1/tiktok/app/v3/fetch_one_video_v3'],
  ['fetchMultiVideoApiV1TiktokAppV3FetchMultiVideoPost', '/api/v1/tiktok/app/v3/fetch_multi_video'],
  [
    'fetchMultiVideoV2ApiV1TiktokAppV3FetchMultiVideoV2Post',
    '/api/v1/tiktok/app/v3/fetch_multi_video_v2',
  ],
  [
    'fetchOneVideoByShareUrlV2ApiV1TiktokAppV3FetchOneVideoByShareUrlV2Get',
    '/api/v1/tiktok/app/v3/fetch_one_video_by_share_url_v2',
  ],
  [
    'fetchOneVideoByShareUrlApiV1TiktokAppV3FetchOneVideoByShareUrlGet',
    '/api/v1/tiktok/app/v3/fetch_one_video_by_share_url',
  ],
  [
    'getUserIdAndSecUserIdByUsernameApiV1TiktokAppV3GetUserIdAndSecUserIdByUsernameGet',
    '/api/v1/tiktok/app/v3/get_user_id_and_sec_user_id_by_username',
  ],
  [
    'handlerUserProfileApiV1TiktokAppV3HandlerUserProfileGet',
    '/api/v1/tiktok/app/v3/handler_user_profile',
  ],
  [
    'fetchWebcastUserInfoApiV1TiktokAppV3FetchWebcastUserInfoGet',
    '/api/v1/tiktok/app/v3/fetch_webcast_user_info',
  ],
  [
    'fetchUserCountryByUsernameApiV1TiktokAppV3FetchUserCountryByUsernameGet',
    '/api/v1/tiktok/app/v3/fetch_user_country_by_username',
  ],
  [
    'fetchSimilarUserRecommendationsApiV1TiktokAppV3FetchSimilarUserRecommendationsGet',
    '/api/v1/tiktok/app/v3/fetch_similar_user_recommendations',
  ],
  [
    'fetchUserRepostVideosApiV1TiktokAppV3FetchUserRepostVideosGet',
    '/api/v1/tiktok/app/v3/fetch_user_repost_videos',
  ],
  [
    'fetchUserPostVideosApiV1TiktokAppV3FetchUserPostVideosGet',
    '/api/v1/tiktok/app/v3/fetch_user_post_videos',
  ],
  [
    'fetchUserPostVideosApiV1TiktokAppV3FetchUserPostVideosV2Get',
    '/api/v1/tiktok/app/v3/fetch_user_post_videos_v2',
  ],
  [
    'fetchUserPostVideosV3ApiV1TiktokAppV3FetchUserPostVideosV3Get',
    '/api/v1/tiktok/app/v3/fetch_user_post_videos_v3',
  ],
  [
    'fetchUserLikeVideosApiV1TiktokAppV3FetchUserLikeVideosGet',
    '/api/v1/tiktok/app/v3/fetch_user_like_videos',
  ],
  [
    'fetchVideoCommentsApiV1TiktokAppV3FetchVideoCommentsGet',
    '/api/v1/tiktok/app/v3/fetch_video_comments',
  ],
  [
    'fetchVideoCommentsReplyApiV1TiktokAppV3FetchVideoCommentRepliesGet',
    '/api/v1/tiktok/app/v3/fetch_video_comment_replies',
  ],
  [
    'fetchGeneralSearchResultApiV1TiktokAppV3FetchGeneralSearchResultGet',
    '/api/v1/tiktok/app/v3/fetch_general_search_result',
  ],
  [
    'fetchVideoSearchResultApiV1TiktokAppV3FetchVideoSearchResultGet',
    '/api/v1/tiktok/app/v3/fetch_video_search_result',
  ],
  [
    'fetchUserSearchResultApiV1TiktokAppV3FetchUserSearchResultGet',
    '/api/v1/tiktok/app/v3/fetch_user_search_result',
  ],
  [
    'fetchMusicSearchResultApiV1TiktokAppV3FetchMusicSearchResultGet',
    '/api/v1/tiktok/app/v3/fetch_music_search_result',
  ],
  [
    'fetchHashtagSearchResultApiV1TiktokAppV3FetchHashtagSearchResultGet',
    '/api/v1/tiktok/app/v3/fetch_hashtag_search_result',
  ],
  [
    'fetchLiveSearchResultApiV1TiktokAppV3FetchLiveSearchResultGet',
    '/api/v1/tiktok/app/v3/fetch_live_search_result',
  ],
  [
    'fetchLocationSearchApiV1TiktokAppV3FetchLocationSearchGet',
    '/api/v1/tiktok/app/v3/fetch_location_search',
  ],
  [
    'fetchMusicDetailApiV1TiktokAppV3FetchMusicDetailGet',
    '/api/v1/tiktok/app/v3/fetch_music_detail',
  ],
  [
    'fetchMusicVideoListApiV1TiktokAppV3FetchMusicVideoListGet',
    '/api/v1/tiktok/app/v3/fetch_music_video_list',
  ],
  [
    'fetchHashtagDetailApiV1TiktokAppV3FetchHashtagDetailGet',
    '/api/v1/tiktok/app/v3/fetch_hashtag_detail',
  ],
  [
    'fetchHashtagVideoListApiV1TiktokAppV3FetchHashtagVideoListGet',
    '/api/v1/tiktok/app/v3/fetch_hashtag_video_list',
  ],
  [
    'fetchUserFollowerListApiV1TiktokAppV3FetchUserFollowerListGet',
    '/api/v1/tiktok/app/v3/fetch_user_follower_list',
  ],
  [
    'fetchUserFollowingListApiV1TiktokAppV3FetchUserFollowingListGet',
    '/api/v1/tiktok/app/v3/fetch_user_following_list',
  ],
  [
    'fetchCreatorSearchInsightsApiV1TiktokAppV3FetchCreatorSearchInsightsGet',
    '/api/v1/tiktok/app/v3/fetch_creator_search_insights',
  ],
  [
    'fetchCreatorSearchInsightsDetailApiV1TiktokAppV3FetchCreatorSearchInsightsDetailGet',
    '/api/v1/tiktok/app/v3/fetch_creator_search_insights_detail',
  ],
  [
    'fetchCreatorSearchInsightsTrendApiV1TiktokAppV3FetchCreatorSearchInsightsTrendGet',
    '/api/v1/tiktok/app/v3/fetch_creator_search_insights_trend',
  ],
  [
    'fetchCreatorSearchInsightsVideosApiV1TiktokAppV3FetchCreatorSearchInsightsVideosGet',
    '/api/v1/tiktok/app/v3/fetch_creator_search_insights_videos',
  ],
  [
    'fetchMusicChartListApiV1TiktokAppV3FetchMusicChartListGet',
    '/api/v1/tiktok/app/v3/fetch_music_chart_list',
  ],
  [
    'searchFollowerListApiV1TiktokAppV3SearchFollowerListGet',
    '/api/v1/tiktok/app/v3/search_follower_list',
  ],
  [
    'searchFollowingListApiV1TiktokAppV3SearchFollowingListGet',
    '/api/v1/tiktok/app/v3/search_following_list',
  ],
  [
    'fetchLiveRoomInfoApiV1TiktokAppV3FetchLiveRoomInfoGet',
    '/api/v1/tiktok/app/v3/fetch_live_room_info',
  ],
  [
    'fetchLiveRankingListApiV1TiktokAppV3FetchLiveRankingListGet',
    '/api/v1/tiktok/app/v3/fetch_live_ranking_list',
  ],
  [
    'checkLiveRoomOnlineApiV1TiktokAppV3CheckLiveRoomOnlineGet',
    '/api/v1/tiktok/app/v3/check_live_room_online',
  ],
  [
    'checkLiveRoomOnlineBatchApiV1TiktokAppV3CheckLiveRoomOnlineBatchPost',
    '/api/v1/tiktok/app/v3/check_live_room_online_batch',
  ],
  [
    'fetchShareShortLinkApiV1TiktokAppV3FetchShareShortLinkGet',
    '/api/v1/tiktok/app/v3/fetch_share_short_link',
  ],
  [
    'fetchShareQrCodeApiV1TiktokAppV3FetchShareQrCodeGet',
    '/api/v1/tiktok/app/v3/fetch_share_qr_code',
  ],
  [
    'fetchProductSearchApiV1TiktokAppV3FetchProductSearchGet',
    '/api/v1/tiktok/app/v3/fetch_product_search',
  ],
  [
    'fetchCreatorInfoApiV1TiktokAppV3FetchCreatorInfoGet',
    '/api/v1/tiktok/app/v3/fetch_creator_info',
  ],
  [
    'fetchCreatorShowcaseProductListApiV1TiktokAppV3FetchCreatorShowcaseProductListGet',
    '/api/v1/tiktok/app/v3/fetch_creator_showcase_product_list',
  ],
  [
    'fetchShopIdByShareLinkApiV1TiktokAppV3FetchShopIdByShareLinkGet',
    '/api/v1/tiktok/app/v3/fetch_shop_id_by_share_link',
  ],
  [
    'fetchProductIdByShareLinkApiV1TiktokAppV3FetchProductIdByShareLinkGet',
    '/api/v1/tiktok/app/v3/fetch_product_id_by_share_link',
  ],
  [
    'fetchProductDetailApiV1TiktokAppV3FetchProductDetailGet',
    '/api/v1/tiktok/app/v3/fetch_product_detail',
  ],
  [
    'fetchProductDetailV2ApiV1TiktokAppV3FetchProductDetailV2Get',
    '/api/v1/tiktok/app/v3/fetch_product_detail_v2',
  ],
  [
    'fetchProductDetailV3ApiV1TiktokAppV3FetchProductDetailV3Get',
    '/api/v1/tiktok/app/v3/fetch_product_detail_v3',
  ],
  [
    'fetchProductDetailV4ApiV1TiktokAppV3FetchProductDetailV4Get',
    '/api/v1/tiktok/app/v3/fetch_product_detail_v4',
  ],
  [
    'fetchProductReviewApiV1TiktokAppV3FetchProductReviewGet',
    '/api/v1/tiktok/app/v3/fetch_product_review',
  ],
  [
    'fetchShopHomePageListApiV1TiktokAppV3FetchShopHomePageListGet',
    '/api/v1/tiktok/app/v3/fetch_shop_home_page_list',
  ],
  ['fetchShopHomeApiV1TiktokAppV3FetchShopHomeGet', '/api/v1/tiktok/app/v3/fetch_shop_home'],
  [
    'fetchShopProductRecommendApiV1TiktokAppV3FetchShopProductRecommendGet',
    '/api/v1/tiktok/app/v3/fetch_shop_product_recommend',
  ],
  [
    'fetchShopProductListApiV1TiktokAppV3FetchShopProductListGet',
    '/api/v1/tiktok/app/v3/fetch_shop_product_list',
  ],
  [
    'fetchShopProductListV2ApiV1TiktokAppV3FetchShopProductListV2Get',
    '/api/v1/tiktok/app/v3/fetch_shop_product_list_v2',
  ],
  ['fetchShopInfoApiV1TiktokAppV3FetchShopInfoGet', '/api/v1/tiktok/app/v3/fetch_shop_info'],
  [
    'fetchShopProductCategoryApiV1TiktokAppV3FetchShopProductCategoryGet',
    '/api/v1/tiktok/app/v3/fetch_shop_product_category',
  ],
  [
    'fetchLiveDailyRankApiV1TiktokAppV3FetchLiveDailyRankGet',
    '/api/v1/tiktok/app/v3/fetch_live_daily_rank',
  ],
  [
    'fetchUserMusicListApiV1TiktokAppV3FetchUserMusicListGet',
    '/api/v1/tiktok/app/v3/fetch_user_music_list',
  ],
  [
    'fetchContentTranslateApiV1TiktokAppV3FetchContentTranslatePost',
    '/api/v1/tiktok/app/v3/fetch_content_translate',
  ],
  ['fetchHomeFeedApiV1TiktokAppV3FetchHomeFeedPost', '/api/v1/tiktok/app/v3/fetch_home_feed'],
  [
    'tTencryptAlgorithmApiV1TiktokAppV3TTencryptAlgorithmPost',
    '/api/v1/tiktok/app/v3/TTencrypt_algorithm',
  ],
  [
    'fetchLiveRoomProductListApiV1TiktokAppV3FetchLiveRoomProductListGet',
    '/api/v1/tiktok/app/v3/fetch_live_room_product_list',
  ],
  [
    'fetchLiveRoomProductListV2ApiV1TiktokAppV3FetchLiveRoomProductListV2Get',
    '/api/v1/tiktok/app/v3/fetch_live_room_product_list_v2',
  ],
  [
    'addVideoPlayCountApiV1TiktokAppV3AddVideoPlayCountGet',
    '/api/v1/tiktok/app/v3/add_video_play_count',
  ],
  [
    'encryptDecryptLoginRequestApiV1TiktokAppV3EncryptDecryptLoginRequestPost',
    '/api/v1/tiktok/app/v3/encrypt_decrypt_login_request',
  ],
  [
    'openTiktokAppToVideoDetailApiV1TiktokAppV3OpenTiktokAppToVideoDetailGet',
    '/api/v1/tiktok/app/v3/open_tiktok_app_to_video_detail',
  ],
  [
    'openTiktokAppToUserProfileApiV1TiktokAppV3OpenTiktokAppToUserProfileGet',
    '/api/v1/tiktok/app/v3/open_tiktok_app_to_user_profile',
  ],
  [
    'openTiktokAppToKeywordSearchApiV1TiktokAppV3OpenTiktokAppToKeywordSearchGet',
    '/api/v1/tiktok/app/v3/open_tiktok_app_to_keyword_search',
  ],
  [
    'openTiktokAppToSendPrivateMessageApiV1TiktokAppV3OpenTiktokAppToSendPrivateMessageGet',
    '/api/v1/tiktok/app/v3/open_tiktok_app_to_send_private_message',
  ],
  [
    'getAccountHealthStatusApiV1TiktokCreatorGetAccountHealthStatusPost',
    '/api/v1/tiktok/creator/get_account_health_status',
  ],
  [
    'getAccountViolationListApiV1TiktokCreatorGetAccountViolationListPost',
    '/api/v1/tiktok/creator/get_account_violation_list',
  ],
  [
    'getAccountInsightsOverviewApiV1TiktokCreatorGetAccountInsightsOverviewPost',
    '/api/v1/tiktok/creator/get_account_insights_overview',
  ],
  [
    'getLiveOverviewApiV1TiktokCreatorGetLiveAnalyticsSummaryPost',
    '/api/v1/tiktok/creator/get_live_analytics_summary',
  ],
  [
    'getVideoAnalyticsSummaryApiV1TiktokCreatorGetVideoAnalyticsSummaryPost',
    '/api/v1/tiktok/creator/get_video_analytics_summary',
  ],
  [
    'getVideoListApiV1TiktokCreatorGetVideoListAnalyticsPost',
    '/api/v1/tiktok/creator/get_video_list_analytics',
  ],
  [
    'getProductAnalyticsListApiV1TiktokCreatorGetProductAnalyticsListPost',
    '/api/v1/tiktok/creator/get_product_analytics_list',
  ],
  [
    'getCreatorAccountInfoApiV1TiktokCreatorGetCreatorAccountInfoPost',
    '/api/v1/tiktok/creator/get_creator_account_info',
  ],
  [
    'getShowcaseProductListApiV1TiktokCreatorGetShowcaseProductListPost',
    '/api/v1/tiktok/creator/get_showcase_product_list',
  ],
  [
    'getVideoAssociatedProductListApiV1TiktokCreatorGetVideoAssociatedProductListPost',
    '/api/v1/tiktok/creator/get_video_associated_product_list',
  ],
  [
    'getVideoDetailedStatsApiV1TiktokCreatorGetVideoDetailedStatsPost',
    '/api/v1/tiktok/creator/get_video_detailed_stats',
  ],
  [
    'getVideoToProductStatsApiV1TiktokCreatorGetVideoToProductStatsPost',
    '/api/v1/tiktok/creator/get_video_to_product_stats',
  ],
  [
    'getProductRelatedVideosApiV1TiktokCreatorGetProductRelatedVideosPost',
    '/api/v1/tiktok/creator/get_product_related_videos',
  ],
  [
    'getVideoAudienceStatsApiV1TiktokCreatorGetVideoAudienceStatsPost',
    '/api/v1/tiktok/creator/get_video_audience_stats',
  ],
  [
    'fetchVideoMetricsApiV1TiktokAnalyticsFetchVideoMetricsGet',
    '/api/v1/tiktok/analytics/fetch_video_metrics',
  ],
  [
    'detectFakeViewsApiV1TiktokAnalyticsDetectFakeViewsGet',
    '/api/v1/tiktok/analytics/detect_fake_views',
  ],
  [
    'fetchCommentKeywordsApiV1TiktokAnalyticsFetchCommentKeywordsGet',
    '/api/v1/tiktok/analytics/fetch_comment_keywords',
  ],
  [
    'fetchCreatorInfoAndMilestonesApiV1TiktokAnalyticsFetchCreatorInfoAndMilestonesGet',
    '/api/v1/tiktok/analytics/fetch_creator_info_and_milestones',
  ],
  ['getAdsDetailApiV1TiktokAdsGetAdsDetailGet', '/api/v1/tiktok/ads/get_ads_detail'],
  ['searchAdsApiV1TiktokAdsSearchAdsGet', '/api/v1/tiktok/ads/search_ads'],
  [
    'getKeywordInsightsApiV1TiktokAdsGetKeywordInsightsGet',
    '/api/v1/tiktok/ads/get_keyword_insights',
  ],
  ['getTopProductsApiV1TiktokAdsGetTopProductsGet', '/api/v1/tiktok/ads/get_top_products'],
  ['getHashtagListApiV1TiktokAdsGetHashtagListGet', '/api/v1/tiktok/ads/get_hashtag_list'],
  ['getSoundRankListApiV1TiktokAdsGetSoundRankListGet', '/api/v1/tiktok/ads/get_sound_rank_list'],
  ['getKeywordListApiV1TiktokAdsGetKeywordListGet', '/api/v1/tiktok/ads/get_keyword_list'],
  [
    'getTopAdsSpotlightApiV1TiktokAdsGetTopAdsSpotlightGet',
    '/api/v1/tiktok/ads/get_top_ads_spotlight',
  ],
  [
    'getAdKeyframeAnalysisApiV1TiktokAdsGetAdKeyframeAnalysisGet',
    '/api/v1/tiktok/ads/get_ad_keyframe_analysis',
  ],
  ['getAdPercentileApiV1TiktokAdsGetAdPercentileGet', '/api/v1/tiktok/ads/get_ad_percentile'],
  [
    'getAdInteractiveAnalysisApiV1TiktokAdsGetAdInteractiveAnalysisGet',
    '/api/v1/tiktok/ads/get_ad_interactive_analysis',
  ],
  ['getRecommendedAdsApiV1TiktokAdsGetRecommendedAdsGet', '/api/v1/tiktok/ads/get_recommended_ads'],
  [
    'getQuerySuggestionsApiV1TiktokAdsGetQuerySuggestionsGet',
    '/api/v1/tiktok/ads/get_query_suggestions',
  ],
  ['getKeywordFiltersApiV1TiktokAdsGetKeywordFiltersGet', '/api/v1/tiktok/ads/get_keyword_filters'],
  [
    'getRelatedKeywordsApiV1TiktokAdsGetRelatedKeywordsGet',
    '/api/v1/tiktok/ads/get_related_keywords',
  ],
  ['getKeywordDetailsApiV1TiktokAdsGetKeywordDetailsGet', '/api/v1/tiktok/ads/get_keyword_details'],
  [
    'getCreativePatternsApiV1TiktokAdsGetCreativePatternsGet',
    '/api/v1/tiktok/ads/get_creative_patterns',
  ],
  ['getProductFiltersApiV1TiktokAdsGetProductFiltersGet', '/api/v1/tiktok/ads/get_product_filters'],
  ['getProductMetricsApiV1TiktokAdsGetProductMetricsGet', '/api/v1/tiktok/ads/get_product_metrics'],
  ['getProductDetailApiV1TiktokAdsGetProductDetailGet', '/api/v1/tiktok/ads/get_product_detail'],
  ['getHashtagFiltersApiV1TiktokAdsGetHashtagFiltersGet', '/api/v1/tiktok/ads/get_hashtag_filters'],
  ['getHashtagCreatorApiV1TiktokAdsGetHashtagCreatorGet', '/api/v1/tiktok/ads/get_hashtag_creator'],
  ['getSoundFiltersApiV1TiktokAdsGetSoundFiltersGet', '/api/v1/tiktok/ads/get_sound_filters'],
  ['getSoundDetailApiV1TiktokAdsGetSoundDetailGet', '/api/v1/tiktok/ads/get_sound_detail'],
  ['searchSoundHintApiV1TiktokAdsSearchSoundHintGet', '/api/v1/tiktok/ads/search_sound_hint'],
  ['searchSoundApiV1TiktokAdsSearchSoundGet', '/api/v1/tiktok/ads/search_sound'],
  [
    'getSoundRecommendationsApiV1TiktokAdsGetSoundRecommendationsGet',
    '/api/v1/tiktok/ads/get_sound_recommendations',
  ],
  ['getCreatorFiltersApiV1TiktokAdsGetCreatorFiltersGet', '/api/v1/tiktok/ads/get_creator_filters'],
  ['getCreatorListApiV1TiktokAdsGetCreatorListGet', '/api/v1/tiktok/ads/get_creator_list'],
  ['searchCreatorsApiV1TiktokAdsSearchCreatorsGet', '/api/v1/tiktok/ads/search_creators'],
  ['getPopularTrendsApiV1TiktokAdsGetPopularTrendsGet', '/api/v1/tiktok/ads/get_popular_trends'],
  [
    'fetchProductDetailApiV1TiktokShopWebFetchProductDetailGet',
    '/api/v1/tiktok/shop/web/fetch_product_detail',
  ],
  [
    'fetchProductDetailV2ApiV1TiktokShopWebFetchProductDetailV2Get',
    '/api/v1/tiktok/shop/web/fetch_product_detail_v2',
  ],
  [
    'fetchProductDetailV3ApiV1TiktokShopWebFetchProductDetailV3Get',
    '/api/v1/tiktok/shop/web/fetch_product_detail_v3',
  ],
  [
    'fetchProductReviewsV1ApiV1TiktokShopWebFetchProductReviewsV1Get',
    '/api/v1/tiktok/shop/web/fetch_product_reviews_v1',
  ],
  [
    'fetchProductReviewsV2ApiV1TiktokShopWebFetchProductReviewsV2Get',
    '/api/v1/tiktok/shop/web/fetch_product_reviews_v2',
  ],
  [
    'fetchSellerProductsListApiV1TiktokShopWebFetchSellerProductsListGet',
    '/api/v1/tiktok/shop/web/fetch_seller_products_list',
  ],
  [
    'fetchSellerProductsListV2ApiV1TiktokShopWebFetchSellerProductsListV2Get',
    '/api/v1/tiktok/shop/web/fetch_seller_products_list_v2',
  ],
  [
    'fetchSearchWordSuggestionApiV1TiktokShopWebFetchSearchWordSuggestionGet',
    '/api/v1/tiktok/shop/web/fetch_search_word_suggestion',
  ],
  [
    'fetchSearchWordSuggestionV2ApiV1TiktokShopWebFetchSearchWordSuggestionV2Get',
    '/api/v1/tiktok/shop/web/fetch_search_word_suggestion_v2',
  ],
  [
    'fetchSearchProductsListApiV1TiktokShopWebFetchSearchProductsListGet',
    '/api/v1/tiktok/shop/web/fetch_search_products_list',
  ],
  [
    'fetchSearchProductsListV2ApiV1TiktokShopWebFetchSearchProductsListV2Get',
    '/api/v1/tiktok/shop/web/fetch_search_products_list_v2',
  ],
  [
    'fetchSearchProductsListV3ApiV1TiktokShopWebFetchSearchProductsListV3Get',
    '/api/v1/tiktok/shop/web/fetch_search_products_list_v3',
  ],
  [
    'fetchProductsCategoryListApiV1TiktokShopWebFetchProductsCategoryListGet',
    '/api/v1/tiktok/shop/web/fetch_products_category_list',
  ],
  [
    'fetchProductsByCategoryIdApiV1TiktokShopWebFetchProductsByCategoryIdGet',
    '/api/v1/tiktok/shop/web/fetch_products_by_category_id',
  ],
  [
    'fetchHotSellingProductsListApiV1TiktokShopWebFetchHotSellingProductsListGet',
    '/api/v1/tiktok/shop/web/fetch_hot_selling_products_list',
  ],
  ['applyForScopeApiV1TiktokInteractionApplyGet', '/api/v1/tiktok/interaction/apply'],
  ['postCommentApiV1TiktokInteractionPostCommentPost', '/api/v1/tiktok/interaction/post_comment'],
  [
    'replyCommentApiV1TiktokInteractionReplyCommentPost',
    '/api/v1/tiktok/interaction/reply_comment',
  ],
  ['likeApiV1TiktokInteractionLikePost', '/api/v1/tiktok/interaction/like'],
  ['followApiV1TiktokInteractionFollowPost', '/api/v1/tiktok/interaction/follow'],
  ['collectApiV1TiktokInteractionCollectPost', '/api/v1/tiktok/interaction/collect'],
  ['forwardApiV1TiktokInteractionForwardPost', '/api/v1/tiktok/interaction/forward'],
  ['fetchOneVideoApiV1DouyinWebFetchOneVideoGet', '/api/v1/douyin/web/fetch_one_video'],
  ['fetchOneVideoApiV1DouyinWebFetchOneVideoV2Get', '/api/v1/douyin/web/fetch_one_video_v2'],
  [
    'fetchOneVideoByShareUrlApiV1DouyinWebFetchOneVideoByShareUrlGet',
    '/api/v1/douyin/web/fetch_one_video_by_share_url',
  ],
  [
    'fetchVideoHighQualityPlayUrlApiV1DouyinWebFetchVideoHighQualityPlayUrlGet',
    '/api/v1/douyin/web/fetch_video_high_quality_play_url',
  ],
  [
    'fetchMultiVideoHighQualityPlayUrlApiV1DouyinWebFetchMultiVideoHighQualityPlayUrlPost',
    '/api/v1/douyin/web/fetch_multi_video_high_quality_play_url',
  ],
  ['fetchMultiVideoApiV1DouyinWebFetchMultiVideoPost', '/api/v1/douyin/web/fetch_multi_video'],
  [
    'fetchOneVideoDanmakuApiV1DouyinWebFetchOneVideoDanmakuGet',
    '/api/v1/douyin/web/fetch_one_video_danmaku',
  ],
  ['fetchHomeFeedApiV1DouyinWebFetchHomeFeedGet', '/api/v1/douyin/web/fetch_home_feed'],
  ['fetchRelatedPostsApiV1DouyinWebFetchRelatedPostsGet', '/api/v1/douyin/web/fetch_related_posts'],
  [
    'fetchUserPostVideosApiV1DouyinWebFetchUserPostVideosGet',
    '/api/v1/douyin/web/fetch_user_post_videos',
  ],
  [
    'fetchUserLikeVideosApiV1DouyinWebFetchUserLikeVideosPost',
    '/api/v1/douyin/web/fetch_user_like_videos',
  ],
  [
    'fetchUserCollectionVideosApiV1DouyinWebFetchUserCollectionVideosPost',
    '/api/v1/douyin/web/fetch_user_collection_videos',
  ],
  [
    'fetchUserCollectsApiV1DouyinWebFetchUserCollectsPost',
    '/api/v1/douyin/web/fetch_user_collects',
  ],
  [
    'fetchUserCollectsVideosApiV1DouyinWebFetchUserCollectsVideosGet',
    '/api/v1/douyin/web/fetch_user_collects_videos',
  ],
  [
    'fetchUserMixVideosApiV1DouyinWebFetchUserMixVideosGet',
    '/api/v1/douyin/web/fetch_user_mix_videos',
  ],
  [
    'fetchUserLiveVideosApiV1DouyinWebFetchUserLiveVideosGet',
    '/api/v1/douyin/web/fetch_user_live_videos',
  ],
  [
    'fetchUserLiveVideosBySecUidApiV1DouyinWebFetchUserLiveVideosBySecUidGet',
    '/api/v1/douyin/web/fetch_user_live_videos_by_sec_uid',
  ],
  [
    'fetchUserLiveVideosByRoomIdApiV1DouyinWebFetchUserLiveVideosByRoomIdGet',
    '/api/v1/douyin/web/fetch_user_live_videos_by_room_id',
  ],
  [
    'fetchUserLiveVideosByRoomIdV2ApiV1DouyinWebFetchUserLiveVideosByRoomIdV2Get',
    '/api/v1/douyin/web/fetch_user_live_videos_by_room_id_v2',
  ],
  [
    'fetchLiveGiftRankingApiV1DouyinWebFetchLiveGiftRankingGet',
    '/api/v1/douyin/web/fetch_live_gift_ranking',
  ],
  [
    'fetchLiveRoomProductResultApiV1DouyinWebFetchLiveRoomProductResultGet',
    '/api/v1/douyin/web/fetch_live_room_product_result',
  ],
  [
    'fetchProductDetailApiV1DouyinWebFetchProductDetailGet',
    '/api/v1/douyin/web/fetch_product_detail',
  ],
  [
    'fetchProductSkuListApiV1DouyinWebFetchProductSkuListGet',
    '/api/v1/douyin/web/fetch_product_sku_list',
  ],
  [
    'fetchProductCouponApiV1DouyinWebFetchProductCouponGet',
    '/api/v1/douyin/web/fetch_product_coupon',
  ],
  [
    'fetchProductReviewScoreApiV1DouyinWebFetchProductReviewScoreGet',
    '/api/v1/douyin/web/fetch_product_review_score',
  ],
  [
    'fetchProductReviewListApiV1DouyinWebFetchProductReviewListGet',
    '/api/v1/douyin/web/fetch_product_review_list',
  ],
  [
    'fetchUserProfileByUidApiV1DouyinWebFetchUserProfileByUidGet',
    '/api/v1/douyin/web/fetch_user_profile_by_uid',
  ],
  [
    'fetchBatchUserProfileV1ApiV1DouyinWebFetchBatchUserProfileV1Get',
    '/api/v1/douyin/web/fetch_batch_user_profile_v1',
  ],
  [
    'fetchBatchUserProfileV2ApiV1DouyinWebFetchBatchUserProfileV2Get',
    '/api/v1/douyin/web/fetch_batch_user_profile_v2',
  ],
  [
    'fetchUserLiveInfoByUidApiV1DouyinWebFetchUserLiveInfoByUidGet',
    '/api/v1/douyin/web/fetch_user_live_info_by_uid',
  ],
  [
    'fetchUserProfileByShortIdApiV1DouyinWebFetchUserProfileByShortIdGet',
    '/api/v1/douyin/web/fetch_user_profile_by_short_id',
  ],
  ['handlerShortenUrlApiV1DouyinWebHandlerShortenUrlGet', '/api/v1/douyin/web/handler_shorten_url'],
  [
    'handlerUserProfileApiV1DouyinWebHandlerUserProfileGet',
    '/api/v1/douyin/web/handler_user_profile',
  ],
  [
    'handlerUserProfileV2ApiV1DouyinWebHandlerUserProfileV2Get',
    '/api/v1/douyin/web/handler_user_profile_v2',
  ],
  [
    'encryptUidToSecUserIdApiV1DouyinWebEncryptUidToSecUserIdGet',
    '/api/v1/douyin/web/encrypt_uid_to_sec_user_id',
  ],
  [
    'handlerUserProfileV3ApiV1DouyinWebHandlerUserProfileV3Get',
    '/api/v1/douyin/web/handler_user_profile_v3',
  ],
  [
    'handlerUserProfileV4ApiV1DouyinWebHandlerUserProfileV4Get',
    '/api/v1/douyin/web/handler_user_profile_v4',
  ],
  [
    'fetchUserFansListApiV1DouyinWebFetchUserFansListGet',
    '/api/v1/douyin/web/fetch_user_fans_list',
  ],
  [
    'fetchUserFollowingListApiV1DouyinWebFetchUserFollowingListGet',
    '/api/v1/douyin/web/fetch_user_following_list',
  ],
  [
    'fetchVideoCommentsApiV1DouyinWebFetchVideoCommentsGet',
    '/api/v1/douyin/web/fetch_video_comments',
  ],
  [
    'fetchVideoCommentsReplyApiV1DouyinWebFetchVideoCommentRepliesGet',
    '/api/v1/douyin/web/fetch_video_comment_replies',
  ],
  [
    'fetchGeneralSearchResultApiV1DouyinWebFetchGeneralSearchResultGet',
    '/api/v1/douyin/web/fetch_general_search_result',
  ],
  [
    'fetchVideoSearchResultApiV1DouyinWebFetchVideoSearchResultGet',
    '/api/v1/douyin/web/fetch_video_search_result',
  ],
  [
    'fetchVideoSearchResultV2ApiV1DouyinWebFetchVideoSearchResultV2Get',
    '/api/v1/douyin/web/fetch_video_search_result_v2',
  ],
  [
    'fetchUserSearchResultApiV1DouyinWebFetchUserSearchResultGet',
    '/api/v1/douyin/web/fetch_user_search_result',
  ],
  [
    'fetchUserSearchResultV2ApiV1DouyinWebFetchUserSearchResultV2Get',
    '/api/v1/douyin/web/fetch_user_search_result_v2',
  ],
  [
    'fetchUserSearchResultV3ApiV1DouyinWebFetchUserSearchResultV3Get',
    '/api/v1/douyin/web/fetch_user_search_result_v3',
  ],
  [
    'fetchLiveSearchResultApiV1DouyinWebFetchLiveSearchResultGet',
    '/api/v1/douyin/web/fetch_live_search_result',
  ],
  [
    'fetchSearchChallengeApiV1DouyinWebFetchSearchChallengePost',
    '/api/v1/douyin/web/fetch_search_challenge',
  ],
  [
    'fetchChallengePostsApiV1DouyinWebFetchChallengePostsPost',
    '/api/v1/douyin/web/fetch_challenge_posts',
  ],
  [
    'fetchHotSearchResultApiV1DouyinWebFetchHotSearchResultGet',
    '/api/v1/douyin/web/fetch_hot_search_result',
  ],
  [
    'fetchVideoChannelResultApiV1DouyinWebFetchVideoChannelResultGet',
    '/api/v1/douyin/web/fetch_video_channel_result',
  ],
  [
    'fetchDouyinWebGuestCookieApiV1DouyinWebFetchDouyinWebGuestCookieGet',
    '/api/v1/douyin/web/fetch_douyin_web_guest_cookie',
  ],
  [
    'generateRealMsTokenApiV1DouyinWebGenerateRealMsTokenGet',
    '/api/v1/douyin/web/generate_real_msToken',
  ],
  ['generateTtwidApiV1DouyinWebGenerateTtwidGet', '/api/v1/douyin/web/generate_ttwid'],
  ['fetchQueryUserApiV1DouyinWebFetchQueryUserPost', '/api/v1/douyin/web/fetch_query_user'],
  ['generateVerifyFpApiV1DouyinWebGenerateVerifyFpGet', '/api/v1/douyin/web/generate_verify_fp'],
  ['generateSVWebIdApiV1DouyinWebGenerateSVWebIdGet', '/api/v1/douyin/web/generate_s_v_web_id'],
  [
    'generateWssXbSignatureApiV1DouyinWebGenerateWssXbSignatureGet',
    '/api/v1/douyin/web/generate_wss_xb_signature',
  ],
  ['generateXBogusApiV1DouyinWebGenerateXBogusPost', '/api/v1/douyin/web/generate_x_bogus'],
  ['generateABogusApiV1DouyinWebGenerateABogusPost', '/api/v1/douyin/web/generate_a_bogus'],
  ['getSecUserIdApiV1DouyinWebGetSecUserIdGet', '/api/v1/douyin/web/get_sec_user_id'],
  ['getAllSecUserIdApiV1DouyinWebGetAllSecUserIdPost', '/api/v1/douyin/web/get_all_sec_user_id'],
  ['getAwemeIdApiV1DouyinWebGetAwemeIdGet', '/api/v1/douyin/web/get_aweme_id'],
  ['getAllAwemeIdApiV1DouyinWebGetAllAwemeIdPost', '/api/v1/douyin/web/get_all_aweme_id'],
  ['getWebcastIdApiV1DouyinWebGetWebcastIdGet', '/api/v1/douyin/web/get_webcast_id'],
  ['getAllWebcastIdApiV1DouyinWebGetAllWebcastIdPost', '/api/v1/douyin/web/get_all_webcast_id'],
  ['webcastId2RoomIdApiV1DouyinWebWebcastId2RoomIdGet', '/api/v1/douyin/web/webcast_id_2_room_id'],
  ['douyinLiveRoomApiV1DouyinWebDouyinLiveRoomGet', '/api/v1/douyin/web/douyin_live_room'],
  ['fetchLiveImFetchApiV1DouyinWebFetchLiveImFetchGet', '/api/v1/douyin/web/fetch_live_im_fetch'],
  ['fetchSeriesAwemeApiV1DouyinWebFetchSeriesAwemeGet', '/api/v1/douyin/web/fetch_series_aweme'],
  [
    'fetchKnowledgeAwemeApiV1DouyinWebFetchKnowledgeAwemeGet',
    '/api/v1/douyin/web/fetch_knowledge_aweme',
  ],
  ['fetchGameAwemeApiV1DouyinWebFetchGameAwemeGet', '/api/v1/douyin/web/fetch_game_aweme'],
  ['fetchCartoonAwemeApiV1DouyinWebFetchCartoonAwemeGet', '/api/v1/douyin/web/fetch_cartoon_aweme'],
  ['fetchCartoonAwemeApiV1DouyinWebFetchMusicAwemeGet', '/api/v1/douyin/web/fetch_music_aweme'],
  ['fetchCartoonAwemeApiV1DouyinWebFetchFoodAwemeGet', '/api/v1/douyin/web/fetch_food_aweme'],
  ['fetchOneVideoApiV1DouyinAppV3FetchOneVideoGet', '/api/v1/douyin/app/v3/fetch_one_video'],
  ['fetchOneVideoV2ApiV1DouyinAppV3FetchOneVideoV2Get', '/api/v1/douyin/app/v3/fetch_one_video_v2'],
  ['fetchOneVideoV3ApiV1DouyinAppV3FetchOneVideoV3Get', '/api/v1/douyin/app/v3/fetch_one_video_v3'],
  [
    'fetchOneVideoByShareUrlApiV1DouyinAppV3FetchShareInfoByShareCodeGet',
    '/api/v1/douyin/app/v3/fetch_share_info_by_share_code',
  ],
  ['fetchMultiVideoApiV1DouyinAppV3FetchMultiVideoPost', '/api/v1/douyin/app/v3/fetch_multi_video'],
  [
    'fetchMultiVideoV2ApiV1DouyinAppV3FetchMultiVideoV2Post',
    '/api/v1/douyin/app/v3/fetch_multi_video_v2',
  ],
  [
    'fetchOneVideoByShareUrlApiV1DouyinAppV3FetchOneVideoByShareUrlGet',
    '/api/v1/douyin/app/v3/fetch_one_video_by_share_url',
  ],
  [
    'fetchVideoHighQualityPlayUrlApiV1DouyinAppV3FetchVideoHighQualityPlayUrlGet',
    '/api/v1/douyin/app/v3/fetch_video_high_quality_play_url',
  ],
  [
    'fetchMultiVideoHighQualityPlayUrlApiV1DouyinAppV3FetchMultiVideoHighQualityPlayUrlPost',
    '/api/v1/douyin/app/v3/fetch_multi_video_high_quality_play_url',
  ],
  [
    'fetchVideoStatisticsApiV1DouyinAppV3FetchVideoStatisticsGet',
    '/api/v1/douyin/app/v3/fetch_video_statistics',
  ],
  [
    'fetchMultiVideoStatisticsApiV1DouyinAppV3FetchMultiVideoStatisticsGet',
    '/api/v1/douyin/app/v3/fetch_multi_video_statistics',
  ],
  [
    'addVideoPlayCountApiV1DouyinAppV3AddVideoPlayCountGet',
    '/api/v1/douyin/app/v3/add_video_play_count',
  ],
  [
    'handlerUserProfileApiV1DouyinAppV3HandlerUserProfileGet',
    '/api/v1/douyin/app/v3/handler_user_profile',
  ],
  [
    'fetchUserFansListApiV1DouyinAppV3FetchUserFansListGet',
    '/api/v1/douyin/app/v3/fetch_user_fans_list',
  ],
  [
    'fetchUserFollowingListApiV1DouyinAppV3FetchUserFollowingListGet',
    '/api/v1/douyin/app/v3/fetch_user_following_list',
  ],
  [
    'fetchUserPostVideosApiV1DouyinAppV3FetchUserPostVideosGet',
    '/api/v1/douyin/app/v3/fetch_user_post_videos',
  ],
  [
    'fetchUserLikeVideosApiV1DouyinAppV3FetchUserLikeVideosGet',
    '/api/v1/douyin/app/v3/fetch_user_like_videos',
  ],
  [
    'fetchVideoCommentsApiV1DouyinAppV3FetchVideoCommentsGet',
    '/api/v1/douyin/app/v3/fetch_video_comments',
  ],
  [
    'fetchVideoCommentsReplyApiV1DouyinAppV3FetchVideoCommentRepliesGet',
    '/api/v1/douyin/app/v3/fetch_video_comment_replies',
  ],
  [
    'fetchVideoMixDetailApiV1DouyinAppV3FetchVideoMixDetailGet',
    '/api/v1/douyin/app/v3/fetch_video_mix_detail',
  ],
  [
    'fetchVideoMixPostListApiV1DouyinAppV3FetchVideoMixPostListGet',
    '/api/v1/douyin/app/v3/fetch_video_mix_post_list',
  ],
  [
    'fetchUserSeriesListApiV1DouyinAppV3FetchUserSeriesListGet',
    '/api/v1/douyin/app/v3/fetch_user_series_list',
  ],
  [
    'fetchSeriesVideoListApiV1DouyinAppV3FetchSeriesVideoListGet',
    '/api/v1/douyin/app/v3/fetch_series_video_list',
  ],
  [
    'fetchSeriesDetailApiV1DouyinAppV3FetchSeriesDetailGet',
    '/api/v1/douyin/app/v3/fetch_series_detail',
  ],
  [
    'fetchGeneralSearchResultApiV1DouyinAppV3FetchGeneralSearchResultGet',
    '/api/v1/douyin/app/v3/fetch_general_search_result',
  ],
  [
    'fetchVideoSearchResultApiV1DouyinAppV3FetchVideoSearchResultGet',
    '/api/v1/douyin/app/v3/fetch_video_search_result',
  ],
  [
    'fetchVideoSearchResultV2ApiV1DouyinAppV3FetchVideoSearchResultV2Get',
    '/api/v1/douyin/app/v3/fetch_video_search_result_v2',
  ],
  [
    'fetchUserSearchResultApiV1DouyinAppV3FetchUserSearchResultGet',
    '/api/v1/douyin/app/v3/fetch_user_search_result',
  ],
  [
    'fetchLiveSearchResultApiV1DouyinAppV3FetchLiveSearchResultGet',
    '/api/v1/douyin/app/v3/fetch_live_search_result',
  ],
  [
    'fetchMusicSearchResultApiV1DouyinAppV3FetchMusicSearchResultGet',
    '/api/v1/douyin/app/v3/fetch_music_search_result',
  ],
  [
    'fetchHashtagSearchResultApiV1DouyinAppV3FetchHashtagSearchResultGet',
    '/api/v1/douyin/app/v3/fetch_hashtag_search_result',
  ],
  [
    'fetchMusicDetailApiV1DouyinAppV3FetchMusicDetailGet',
    '/api/v1/douyin/app/v3/fetch_music_detail',
  ],
  [
    'fetchMusicVideoListApiV1DouyinAppV3FetchMusicVideoListGet',
    '/api/v1/douyin/app/v3/fetch_music_video_list',
  ],
  [
    'fetchHashtagDetailApiV1DouyinAppV3FetchHashtagDetailGet',
    '/api/v1/douyin/app/v3/fetch_hashtag_detail',
  ],
  [
    'fetchHashtagVideoListApiV1DouyinAppV3FetchHashtagVideoListGet',
    '/api/v1/douyin/app/v3/fetch_hashtag_video_list',
  ],
  [
    'fetchHotSearchListApiV1DouyinAppV3FetchHotSearchListGet',
    '/api/v1/douyin/app/v3/fetch_hot_search_list',
  ],
  [
    'fetchLiveHotSearchListApiV1DouyinAppV3FetchLiveHotSearchListGet',
    '/api/v1/douyin/app/v3/fetch_live_hot_search_list',
  ],
  [
    'fetchMusicHotSearchListApiV1DouyinAppV3FetchMusicHotSearchListGet',
    '/api/v1/douyin/app/v3/fetch_music_hot_search_list',
  ],
  [
    'fetchHotBrandSearchCategoryApiV1DouyinAppV3FetchBrandHotSearchListGet',
    '/api/v1/douyin/app/v3/fetch_brand_hot_search_list',
  ],
  [
    'fetchHotBrandSearchApiV1DouyinAppV3FetchBrandHotSearchListDetailGet',
    '/api/v1/douyin/app/v3/fetch_brand_hot_search_list_detail',
  ],
  [
    'generateDouyinShortUrlApiV1DouyinAppV3GenerateDouyinShortUrlGet',
    '/api/v1/douyin/app/v3/generate_douyin_short_url',
  ],
  [
    'generateDouyinVideoShareQrcodeApiV1DouyinAppV3GenerateDouyinVideoShareQrcodeGet',
    '/api/v1/douyin/app/v3/generate_douyin_video_share_qrcode',
  ],
  ['registerDeviceApiV1DouyinAppV3RegisterDeviceGet', '/api/v1/douyin/app/v3/register_device'],
  [
    'openDouyinAppToVideoDetailApiV1DouyinAppV3OpenDouyinAppToVideoDetailGet',
    '/api/v1/douyin/app/v3/open_douyin_app_to_video_detail',
  ],
  [
    'openDouyinAppToUserProfileApiV1DouyinAppV3OpenDouyinAppToUserProfileGet',
    '/api/v1/douyin/app/v3/open_douyin_app_to_user_profile',
  ],
  [
    'openDouyinAppToKeywordSearchApiV1DouyinAppV3OpenDouyinAppToKeywordSearchGet',
    '/api/v1/douyin/app/v3/open_douyin_app_to_keyword_search',
  ],
  [
    'openDouyinAppToSendPrivateMessageApiV1DouyinAppV3OpenDouyinAppToSendPrivateMessageGet',
    '/api/v1/douyin/app/v3/open_douyin_app_to_send_private_message',
  ],
  [
    'fetchCreatorActivityListApiV1DouyinCreatorFetchCreatorActivityListGet',
    '/api/v1/douyin/creator/fetch_creator_activity_list',
  ],
  [
    'fetchCreatorActivityDetailApiV1DouyinCreatorFetchCreatorActivityDetailGet',
    '/api/v1/douyin/creator/fetch_creator_activity_detail',
  ],
  [
    'fetchCreatorMaterialCenterConfigApiV1DouyinCreatorFetchCreatorMaterialCenterConfigGet',
    '/api/v1/douyin/creator/fetch_creator_material_center_config',
  ],
  [
    'fetchCreatorMaterialCenterBillboardApiV1DouyinCreatorFetchCreatorMaterialCenterBillboardGet',
    '/api/v1/douyin/creator/fetch_creator_material_center_billboard',
  ],
  [
    'fetchCreatorHotSpotBillboardApiV1DouyinCreatorFetchCreatorHotSpotBillboardGet',
    '/api/v1/douyin/creator/fetch_creator_hot_spot_billboard',
  ],
  [
    'fetchCreatorHotTopicBillboardApiV1DouyinCreatorFetchCreatorHotTopicBillboardGet',
    '/api/v1/douyin/creator/fetch_creator_hot_topic_billboard',
  ],
  [
    'fetchCreatorHotPropsBillboardApiV1DouyinCreatorFetchCreatorHotPropsBillboardGet',
    '/api/v1/douyin/creator/fetch_creator_hot_props_billboard',
  ],
  [
    'fetchCreatorHotChallengeBillboardApiV1DouyinCreatorFetchCreatorHotChallengeBillboardGet',
    '/api/v1/douyin/creator/fetch_creator_hot_challenge_billboard',
  ],
  [
    'fetchCreatorHotMusicBillboardApiV1DouyinCreatorFetchCreatorHotMusicBillboardGet',
    '/api/v1/douyin/creator/fetch_creator_hot_music_billboard',
  ],
  [
    'fetchCreatorHotCourseApiV1DouyinCreatorFetchCreatorHotCourseGet',
    '/api/v1/douyin/creator/fetch_creator_hot_course',
  ],
  [
    'fetchCreatorContentCategoryApiV1DouyinCreatorFetchCreatorContentCategoryGet',
    '/api/v1/douyin/creator/fetch_creator_content_category',
  ],
  [
    'fetchCreatorContentCourseApiV1DouyinCreatorFetchCreatorContentCourseGet',
    '/api/v1/douyin/creator/fetch_creator_content_course',
  ],
  [
    'fetchVideoDanmakuListApiV1DouyinCreatorFetchVideoDanmakuListGet',
    '/api/v1/douyin/creator/fetch_video_danmaku_list',
  ],
  [
    'fetchUserSearchApiV1DouyinCreatorFetchUserSearchGet',
    '/api/v1/douyin/creator/fetch_user_search',
  ],
  [
    'fetchMissionTaskListApiV1DouyinCreatorFetchMissionTaskListGet',
    '/api/v1/douyin/creator/fetch_mission_task_list',
  ],
  [
    'fetchIndustryCategoryConfigApiV1DouyinCreatorFetchIndustryCategoryConfigGet',
    '/api/v1/douyin/creator/fetch_industry_category_config',
  ],
  [
    'fetchItemOverviewDataApiV1DouyinCreatorV2FetchItemOverviewDataPost',
    '/api/v1/douyin/creator_v2/fetch_item_overview_data',
  ],
  [
    'fetchItemPlaySourceApiV1DouyinCreatorV2FetchItemPlaySourcePost',
    '/api/v1/douyin/creator_v2/fetch_item_play_source',
  ],
  [
    'fetchItemSearchKeywordApiV1DouyinCreatorV2FetchItemSearchKeywordPost',
    '/api/v1/douyin/creator_v2/fetch_item_search_keyword',
  ],
  [
    'fetchItemWatchTrendApiV1DouyinCreatorV2FetchItemWatchTrendPost',
    '/api/v1/douyin/creator_v2/fetch_item_watch_trend',
  ],
  [
    'fetchItemDanmakuAnalysisApiV1DouyinCreatorV2FetchItemDanmakuAnalysisPost',
    '/api/v1/douyin/creator_v2/fetch_item_danmaku_analysis',
  ],
  [
    'fetchItemAudiencePortraitApiV1DouyinCreatorV2FetchItemAudiencePortraitPost',
    '/api/v1/douyin/creator_v2/fetch_item_audience_portrait',
  ],
  [
    'fetchItemAudienceOthersApiV1DouyinCreatorV2FetchItemAudienceOthersPost',
    '/api/v1/douyin/creator_v2/fetch_item_audience_others',
  ],
  [
    'fetchItemAnalysisInvolvedVerticalApiV1DouyinCreatorV2FetchItemAnalysisInvolvedVerticalPost',
    '/api/v1/douyin/creator_v2/fetch_item_analysis_involved_vertical',
  ],
  [
    'fetchItemAnalysisOverviewApiV1DouyinCreatorV2FetchItemAnalysisOverviewPost',
    '/api/v1/douyin/creator_v2/fetch_item_analysis_overview',
  ],
  [
    'fetchItemAnalysisItemPerformanceApiV1DouyinCreatorV2FetchItemAnalysisItemPerformancePost',
    '/api/v1/douyin/creator_v2/fetch_item_analysis_item_performance',
  ],
  [
    'fetchItemListApiV1DouyinCreatorV2FetchItemListPost',
    '/api/v1/douyin/creator_v2/fetch_item_list',
  ],
  [
    'fetchItemListDownloadApiV1DouyinCreatorV2FetchItemListDownloadPost',
    '/api/v1/douyin/creator_v2/fetch_item_list_download',
  ],
  [
    'fetchLiveRoomHistoryListApiV1DouyinCreatorV2FetchLiveRoomHistoryListPost',
    '/api/v1/douyin/creator_v2/fetch_live_room_history_list',
  ],
  [
    'fetchAuthorDiagnosisApiV1DouyinCreatorV2FetchAuthorDiagnosisPost',
    '/api/v1/douyin/creator_v2/fetch_author_diagnosis',
  ],
  [
    'fetchGeneralSearchV1ApiV1DouyinSearchFetchGeneralSearchV1Post',
    '/api/v1/douyin/search/fetch_general_search_v1',
  ],
  [
    'fetchGeneralSearchV2ApiV1DouyinSearchFetchGeneralSearchV2Post',
    '/api/v1/douyin/search/fetch_general_search_v2',
  ],
  [
    'fetchGeneralSearchV3ApiV1DouyinSearchFetchGeneralSearchV3Post',
    '/api/v1/douyin/search/fetch_general_search_v3',
  ],
  [
    'fetchSearchSuggestApiV1DouyinSearchFetchSearchSuggestPost',
    '/api/v1/douyin/search/fetch_search_suggest',
  ],
  [
    'fetchVideoSearchV1ApiV1DouyinSearchFetchVideoSearchV1Post',
    '/api/v1/douyin/search/fetch_video_search_v1',
  ],
  [
    'fetchVideoSearchV2ApiV1DouyinSearchFetchVideoSearchV2Post',
    '/api/v1/douyin/search/fetch_video_search_v2',
  ],
  [
    'fetchMultiSearchApiV1DouyinSearchFetchMultiSearchPost',
    '/api/v1/douyin/search/fetch_multi_search',
  ],
  [
    'fetchUserSearchApiV1DouyinSearchFetchUserSearchPost',
    '/api/v1/douyin/search/fetch_user_search',
  ],
  [
    'fetchUserSearchV2ApiV1DouyinSearchFetchUserSearchV2Post',
    '/api/v1/douyin/search/fetch_user_search_v2',
  ],
  [
    'fetchImageSearchApiV1DouyinSearchFetchImageSearchPost',
    '/api/v1/douyin/search/fetch_image_search',
  ],
  [
    'fetchImageSearchV3ApiV1DouyinSearchFetchImageSearchV3Post',
    '/api/v1/douyin/search/fetch_image_search_v3',
  ],
  [
    'fetchLiveSearchV1ApiV1DouyinSearchFetchLiveSearchV1Post',
    '/api/v1/douyin/search/fetch_live_search_v1',
  ],
  [
    'fetchChallengeSearchV1ApiV1DouyinSearchFetchChallengeSearchV1Post',
    '/api/v1/douyin/search/fetch_challenge_search_v1',
  ],
  [
    'fetchChallengeSearchV2ApiV1DouyinSearchFetchChallengeSearchV2Post',
    '/api/v1/douyin/search/fetch_challenge_search_v2',
  ],
  [
    'fetchChallengeSuggestApiV1DouyinSearchFetchChallengeSuggestPost',
    '/api/v1/douyin/search/fetch_challenge_suggest',
  ],
  [
    'fetchExperienceSearchApiV1DouyinSearchFetchExperienceSearchPost',
    '/api/v1/douyin/search/fetch_experience_search',
  ],
  [
    'fetchMusicSearchApiV1DouyinSearchFetchMusicSearchPost',
    '/api/v1/douyin/search/fetch_music_search',
  ],
  [
    'fetchDiscussSearchApiV1DouyinSearchFetchDiscussSearchPost',
    '/api/v1/douyin/search/fetch_discuss_search',
  ],
  [
    'fetchSchoolSearchApiV1DouyinSearchFetchSchoolSearchPost',
    '/api/v1/douyin/search/fetch_school_search',
  ],
  [
    'fetchVisionSearchApiV1DouyinSearchFetchVisionSearchPost',
    '/api/v1/douyin/search/fetch_vision_search',
  ],
  ['fetchCityListApiV1DouyinBillboardFetchCityListGet', '/api/v1/douyin/billboard/fetch_city_list'],
  [
    'fetchContentTagApiV1DouyinBillboardFetchContentTagGet',
    '/api/v1/douyin/billboard/fetch_content_tag',
  ],
  [
    'fetchHotCategoryListApiV1DouyinBillboardFetchHotCategoryListGet',
    '/api/v1/douyin/billboard/fetch_hot_category_list',
  ],
  [
    'fetchHotRiseListApiV1DouyinBillboardFetchHotRiseListGet',
    '/api/v1/douyin/billboard/fetch_hot_rise_list',
  ],
  [
    'fetchHotCityListApiV1DouyinBillboardFetchHotCityListGet',
    '/api/v1/douyin/billboard/fetch_hot_city_list',
  ],
  [
    'fetchHotChallengeListApiV1DouyinBillboardFetchHotChallengeListGet',
    '/api/v1/douyin/billboard/fetch_hot_challenge_list',
  ],
  [
    'fetchHotTotalListApiV1DouyinBillboardFetchHotTotalListGet',
    '/api/v1/douyin/billboard/fetch_hot_total_list',
  ],
  [
    'fetchHotCalendarListApiV1DouyinBillboardFetchHotCalendarListPost',
    '/api/v1/douyin/billboard/fetch_hot_calendar_list',
  ],
  [
    'fetchHotCalendarDetailApiV1DouyinBillboardFetchHotCalendarDetailGet',
    '/api/v1/douyin/billboard/fetch_hot_calendar_detail',
  ],
  [
    'fetchHotUserPortraitListApiV1DouyinBillboardFetchHotUserPortraitListGet',
    '/api/v1/douyin/billboard/fetch_hot_user_portrait_list',
  ],
  [
    'fetchHotCommentWordListApiV1DouyinBillboardFetchHotCommentWordListGet',
    '/api/v1/douyin/billboard/fetch_hot_comment_word_list',
  ],
  [
    'fetchHotItemTrendsListApiV1DouyinBillboardFetchHotItemTrendsListGet',
    '/api/v1/douyin/billboard/fetch_hot_item_trends_list',
  ],
  [
    'fetchHotAccountListApiV1DouyinBillboardFetchHotAccountListPost',
    '/api/v1/douyin/billboard/fetch_hot_account_list',
  ],
  [
    'fetchHotAccountSearchListApiV1DouyinBillboardFetchHotAccountSearchListGet',
    '/api/v1/douyin/billboard/fetch_hot_account_search_list',
  ],
  [
    'fetchHotAccountTrendsListApiV1DouyinBillboardFetchHotAccountTrendsListGet',
    '/api/v1/douyin/billboard/fetch_hot_account_trends_list',
  ],
  [
    'fetchHotAccountItemAnalysisListApiV1DouyinBillboardFetchHotAccountItemAnalysisListGet',
    '/api/v1/douyin/billboard/fetch_hot_account_item_analysis_list',
  ],
  [
    'fetchHotAccountFansPortraitListApiV1DouyinBillboardFetchHotAccountFansPortraitListGet',
    '/api/v1/douyin/billboard/fetch_hot_account_fans_portrait_list',
  ],
  [
    'fetchHotAccountFansInterestAccountListApiV1DouyinBillboardFetchHotAccountFansInterestAccountListGet',
    '/api/v1/douyin/billboard/fetch_hot_account_fans_interest_account_list',
  ],
  [
    'fetchHotAccountFansInterestTopicListApiV1DouyinBillboardFetchHotAccountFansInterestTopicListGet',
    '/api/v1/douyin/billboard/fetch_hot_account_fans_interest_topic_list',
  ],
  [
    'fetchHotAccountFansInterestSearchListApiV1DouyinBillboardFetchHotAccountFansInterestSearchListGet',
    '/api/v1/douyin/billboard/fetch_hot_account_fans_interest_search_list',
  ],
  [
    'fetchHotTotalVideoListApiV1DouyinBillboardFetchHotTotalVideoListPost',
    '/api/v1/douyin/billboard/fetch_hot_total_video_list',
  ],
  [
    'fetchHotTotalLowFanListApiV1DouyinBillboardFetchHotTotalLowFanListPost',
    '/api/v1/douyin/billboard/fetch_hot_total_low_fan_list',
  ],
  [
    'fetchHotTotalHighPlayListApiV1DouyinBillboardFetchHotTotalHighPlayListPost',
    '/api/v1/douyin/billboard/fetch_hot_total_high_play_list',
  ],
  [
    'fetchHotTotalHighLikeListApiV1DouyinBillboardFetchHotTotalHighLikeListPost',
    '/api/v1/douyin/billboard/fetch_hot_total_high_like_list',
  ],
  [
    'fetchHotTotalHighFanListApiV1DouyinBillboardFetchHotTotalHighFanListPost',
    '/api/v1/douyin/billboard/fetch_hot_total_high_fan_list',
  ],
  [
    'fetchHotTotalTopicListApiV1DouyinBillboardFetchHotTotalTopicListPost',
    '/api/v1/douyin/billboard/fetch_hot_total_topic_list',
  ],
  [
    'fetchHotTotalHighTopicListApiV1DouyinBillboardFetchHotTotalHighTopicListPost',
    '/api/v1/douyin/billboard/fetch_hot_total_high_topic_list',
  ],
  [
    'fetchHotTotalSearchListApiV1DouyinBillboardFetchHotTotalSearchListPost',
    '/api/v1/douyin/billboard/fetch_hot_total_search_list',
  ],
  [
    'fetchHotTotalHighSearchListApiV1DouyinBillboardFetchHotTotalHighSearchListPost',
    '/api/v1/douyin/billboard/fetch_hot_total_high_search_list',
  ],
  [
    'fetchHotTotalHotWordListApiV1DouyinBillboardFetchHotTotalHotWordListPost',
    '/api/v1/douyin/billboard/fetch_hot_total_hot_word_list',
  ],
  [
    'fetchHotTotalHotWordDetailListApiV1DouyinBillboardFetchHotTotalHotWordDetailListGet',
    '/api/v1/douyin/billboard/fetch_hot_total_hot_word_detail_list',
  ],
  ['getSignImageApiV1DouyinXingtuGetSignImageGet', '/api/v1/douyin/xingtu/get_sign_image'],
  [
    'getXingtuKolidByUidApiV1DouyinXingtuGetXingtuKolidByUidGet',
    '/api/v1/douyin/xingtu/get_xingtu_kolid_by_uid',
  ],
  [
    'getXingtuKolidBySecUserIdApiV1DouyinXingtuGetXingtuKolidBySecUserIdGet',
    '/api/v1/douyin/xingtu/get_xingtu_kolid_by_sec_user_id',
  ],
  [
    'getXingtuKolidByUniqueIdApiV1DouyinXingtuGetXingtuKolidByUniqueIdGet',
    '/api/v1/douyin/xingtu/get_xingtu_kolid_by_unique_id',
  ],
  ['kolBaseInfoV1ApiV1DouyinXingtuKolBaseInfoV1Get', '/api/v1/douyin/xingtu/kol_base_info_v1'],
  [
    'kolAudiencePortraitV1ApiV1DouyinXingtuKolAudiencePortraitV1Get',
    '/api/v1/douyin/xingtu/kol_audience_portrait_v1',
  ],
  [
    'kolFansPortraitV1ApiV1DouyinXingtuKolFansPortraitV1Get',
    '/api/v1/douyin/xingtu/kol_fans_portrait_v1',
  ],
  [
    'kolServicePriceV1ApiV1DouyinXingtuKolServicePriceV1Get',
    '/api/v1/douyin/xingtu/kol_service_price_v1',
  ],
  [
    'kolDataOverviewV1ApiV1DouyinXingtuKolDataOverviewV1Get',
    '/api/v1/douyin/xingtu/kol_data_overview_v1',
  ],
  ['searchKolV1ApiV1DouyinXingtuSearchKolV1Get', '/api/v1/douyin/xingtu/search_kol_v1'],
  ['searchKolV2ApiV1DouyinXingtuSearchKolV2Get', '/api/v1/douyin/xingtu/search_kol_v2'],
  [
    'kolConversionAbilityAnalysisV1ApiV1DouyinXingtuKolConversionAbilityAnalysisV1Get',
    '/api/v1/douyin/xingtu/kol_conversion_ability_analysis_v1',
  ],
  [
    'kolVideoPerformanceV1ApiV1DouyinXingtuKolVideoPerformanceV1Get',
    '/api/v1/douyin/xingtu/kol_video_performance_v1',
  ],
  [
    'kolXingtuIndexV1ApiV1DouyinXingtuKolXingtuIndexV1Get',
    '/api/v1/douyin/xingtu/kol_xingtu_index_v1',
  ],
  [
    'kolConvertVideoDisplayV1ApiV1DouyinXingtuKolConvertVideoDisplayV1Get',
    '/api/v1/douyin/xingtu/kol_convert_video_display_v1',
  ],
  [
    'kolLinkStructV1ApiV1DouyinXingtuKolLinkStructV1Get',
    '/api/v1/douyin/xingtu/kol_link_struct_v1',
  ],
  [
    'kolTouchDistributionV1ApiV1DouyinXingtuKolTouchDistributionV1Get',
    '/api/v1/douyin/xingtu/kol_touch_distribution_v1',
  ],
  ['kolCpInfoV1ApiV1DouyinXingtuKolCpInfoV1Get', '/api/v1/douyin/xingtu/kol_cp_info_v1'],
  ['kolRecVideosV1ApiV1DouyinXingtuKolRecVideosV1Get', '/api/v1/douyin/xingtu/kol_rec_videos_v1'],
  ['kolDailyFansV1ApiV1DouyinXingtuKolDailyFansV1Get', '/api/v1/douyin/xingtu/kol_daily_fans_v1'],
  [
    'authorHotCommentTokensV1ApiV1DouyinXingtuAuthorHotCommentTokensV1Get',
    '/api/v1/douyin/xingtu/author_hot_comment_tokens_v1',
  ],
  [
    'authorContentHotCommentKeywordsV1ApiV1DouyinXingtuAuthorContentHotCommentKeywordsV1Get',
    '/api/v1/douyin/xingtu/author_content_hot_comment_keywords_v1',
  ],
  [
    'getRankingListCatalogApiV1DouyinXingtuV2GetRankingListCatalogGet',
    '/api/v1/douyin/xingtu_v2/get_ranking_list_catalog',
  ],
  [
    'getRankingListDataApiV1DouyinXingtuV2GetRankingListDataGet',
    '/api/v1/douyin/xingtu_v2/get_ranking_list_data',
  ],
  [
    'getPlayletActorRankCatalogApiV1DouyinXingtuV2GetPlayletActorRankCatalogPost',
    '/api/v1/douyin/xingtu_v2/get_playlet_actor_rank_catalog',
  ],
  [
    'getPlayletActorRankListApiV1DouyinXingtuV2GetPlayletActorRankListGet',
    '/api/v1/douyin/xingtu_v2/get_playlet_actor_rank_list',
  ],
  [
    'getAuthorMarketFieldsApiV1DouyinXingtuV2GetAuthorMarketFieldsGet',
    '/api/v1/douyin/xingtu_v2/get_author_market_fields',
  ],
  [
    'getAuthorBaseInfoApiV1DouyinXingtuV2GetAuthorBaseInfoGet',
    '/api/v1/douyin/xingtu_v2/get_author_base_info',
  ],
  [
    'getAuthorBusinessCardInfoApiV1DouyinXingtuV2GetAuthorBusinessCardInfoGet',
    '/api/v1/douyin/xingtu_v2/get_author_business_card_info',
  ],
  [
    'getAuthorLocalInfoApiV1DouyinXingtuV2GetAuthorLocalInfoGet',
    '/api/v1/douyin/xingtu_v2/get_author_local_info',
  ],
  [
    'getAuthorShowItemsApiV1DouyinXingtuV2GetAuthorShowItemsGet',
    '/api/v1/douyin/xingtu_v2/get_author_show_items',
  ],
  [
    'getAuthorHotCommentTokensApiV1DouyinXingtuV2GetAuthorHotCommentTokensGet',
    '/api/v1/douyin/xingtu_v2/get_author_hot_comment_tokens',
  ],
  [
    'getAuthorContentHotKeywordsApiV1DouyinXingtuV2GetAuthorContentHotKeywordsGet',
    '/api/v1/douyin/xingtu_v2/get_author_content_hot_keywords',
  ],
  [
    'getRecommendForStarAuthorsApiV1DouyinXingtuV2GetRecommendForStarAuthorsPost',
    '/api/v1/douyin/xingtu_v2/get_recommend_for_star_authors',
  ],
  [
    'getExcellentCaseCategoryListApiV1DouyinXingtuV2GetExcellentCaseCategoryListGet',
    '/api/v1/douyin/xingtu_v2/get_excellent_case_category_list',
  ],
  [
    'getAuthorSpreadInfoApiV1DouyinXingtuV2GetAuthorSpreadInfoGet',
    '/api/v1/douyin/xingtu_v2/get_author_spread_info',
  ],
  [
    'getUserProfileQrcodeApiV1DouyinXingtuV2GetUserProfileQrcodeGet',
    '/api/v1/douyin/xingtu_v2/get_user_profile_qrcode',
  ],
  [
    'getContentTrendGuideApiV1DouyinXingtuV2GetContentTrendGuideGet',
    '/api/v1/douyin/xingtu_v2/get_content_trend_guide',
  ],
  [
    'getIpActivityIndustryListApiV1DouyinXingtuV2GetIpActivityIndustryListGet',
    '/api/v1/douyin/xingtu_v2/get_ip_activity_industry_list',
  ],
  [
    'getIpActivityListApiV1DouyinXingtuV2GetIpActivityListPost',
    '/api/v1/douyin/xingtu_v2/get_ip_activity_list',
  ],
  [
    'getIpActivityDetailApiV1DouyinXingtuV2GetIpActivityDetailGet',
    '/api/v1/douyin/xingtu_v2/get_ip_activity_detail',
  ],
  [
    'getResourceListApiV1DouyinXingtuV2GetResourceListGet',
    '/api/v1/douyin/xingtu_v2/get_resource_list',
  ],
  [
    'getDemanderMcnListApiV1DouyinXingtuV2GetDemanderMcnListGet',
    '/api/v1/douyin/xingtu_v2/get_demander_mcn_list',
  ],
  ['fetchOneVideoApiV1XiguaAppV2FetchOneVideoGet', '/api/v1/xigua/app/v2/fetch_one_video'],
  ['fetchOneVideoV2ApiV1XiguaAppV2FetchOneVideoV2Get', '/api/v1/xigua/app/v2/fetch_one_video_v2'],
  [
    'fetchOneVideoPlayUrlApiV1XiguaAppV2FetchOneVideoPlayUrlGet',
    '/api/v1/xigua/app/v2/fetch_one_video_play_url',
  ],
  [
    'fetchVideoCommentListApiV1XiguaAppV2FetchVideoCommentListGet',
    '/api/v1/xigua/app/v2/fetch_video_comment_list',
  ],
  ['searchVideoApiV1XiguaAppV2SearchVideoGet', '/api/v1/xigua/app/v2/search_video'],
  ['fetchUserInfoApiV1XiguaAppV2FetchUserInfoGet', '/api/v1/xigua/app/v2/fetch_user_info'],
  [
    'fetchUserPostListApiV1XiguaAppV2FetchUserPostListGet',
    '/api/v1/xigua/app/v2/fetch_user_post_list',
  ],
  ['getArticleInfoApiV1ToutiaoWebGetArticleInfoGet', '/api/v1/toutiao/web/get_article_info'],
  ['getVideoInfoApiV1ToutiaoWebGetVideoInfoGet', '/api/v1/toutiao/web/get_video_info'],
  ['getArticleInfoApiV1ToutiaoAppGetArticleInfoGet', '/api/v1/toutiao/app/get_article_info'],
  ['getVideoInfoApiV1ToutiaoAppGetVideoInfoGet', '/api/v1/toutiao/app/get_video_info'],
  ['getCommentsApiV1ToutiaoAppGetCommentsGet', '/api/v1/toutiao/app/get_comments'],
  ['getUserInfoApiV1ToutiaoAppGetUserInfoGet', '/api/v1/toutiao/app/get_user_info'],
  ['getUserIdApiV1ToutiaoAppGetUserIdGet', '/api/v1/toutiao/app/get_user_id'],
  [
    'getImageNoteDetailApiV1XiaohongshuAppV2GetImageNoteDetailGet',
    '/api/v1/xiaohongshu/app_v2/get_image_note_detail',
  ],
  [
    'getVideoNoteDetailApiV1XiaohongshuAppV2GetVideoNoteDetailGet',
    '/api/v1/xiaohongshu/app_v2/get_video_note_detail',
  ],
  [
    'getMixedNoteDetailApiV1XiaohongshuAppV2GetMixedNoteDetailGet',
    '/api/v1/xiaohongshu/app_v2/get_mixed_note_detail',
  ],
  [
    'getNoteCommentsApiV1XiaohongshuAppV2GetNoteCommentsGet',
    '/api/v1/xiaohongshu/app_v2/get_note_comments',
  ],
  [
    'getNoteSubCommentsApiV1XiaohongshuAppV2GetNoteSubCommentsGet',
    '/api/v1/xiaohongshu/app_v2/get_note_sub_comments',
  ],
  ['getUserInfoApiV1XiaohongshuAppV2GetUserInfoGet', '/api/v1/xiaohongshu/app_v2/get_user_info'],
  [
    'getUserPostedNotesApiV1XiaohongshuAppV2GetUserPostedNotesGet',
    '/api/v1/xiaohongshu/app_v2/get_user_posted_notes',
  ],
  [
    'getUserFavedNotesApiV1XiaohongshuAppV2GetUserFavedNotesGet',
    '/api/v1/xiaohongshu/app_v2/get_user_faved_notes',
  ],
  ['searchNotesApiV1XiaohongshuAppV2SearchNotesGet', '/api/v1/xiaohongshu/app_v2/search_notes'],
  ['searchUsersApiV1XiaohongshuAppV2SearchUsersGet', '/api/v1/xiaohongshu/app_v2/search_users'],
  ['searchImagesApiV1XiaohongshuAppV2SearchImagesGet', '/api/v1/xiaohongshu/app_v2/search_images'],
  [
    'searchProductsApiV1XiaohongshuAppV2SearchProductsGet',
    '/api/v1/xiaohongshu/app_v2/search_products',
  ],
  ['searchGroupsApiV1XiaohongshuAppV2SearchGroupsGet', '/api/v1/xiaohongshu/app_v2/search_groups'],
  [
    'getProductDetailApiV1XiaohongshuAppV2GetProductDetailGet',
    '/api/v1/xiaohongshu/app_v2/get_product_detail',
  ],
  [
    'getProductReviewOverviewApiV1XiaohongshuAppV2GetProductReviewOverviewGet',
    '/api/v1/xiaohongshu/app_v2/get_product_review_overview',
  ],
  [
    'getProductReviewsApiV1XiaohongshuAppV2GetProductReviewsGet',
    '/api/v1/xiaohongshu/app_v2/get_product_reviews',
  ],
  [
    'getProductRecommendationsApiV1XiaohongshuAppV2GetProductRecommendationsGet',
    '/api/v1/xiaohongshu/app_v2/get_product_recommendations',
  ],
  ['getTopicInfoApiV1XiaohongshuAppV2GetTopicInfoGet', '/api/v1/xiaohongshu/app_v2/get_topic_info'],
  ['getTopicFeedApiV1XiaohongshuAppV2GetTopicFeedGet', '/api/v1/xiaohongshu/app_v2/get_topic_feed'],
  [
    'getCreatorInspirationFeedApiV1XiaohongshuAppV2GetCreatorInspirationFeedGet',
    '/api/v1/xiaohongshu/app_v2/get_creator_inspiration_feed',
  ],
  [
    'getCreatorHotInspirationFeedApiV1XiaohongshuAppV2GetCreatorHotInspirationFeedGet',
    '/api/v1/xiaohongshu/app_v2/get_creator_hot_inspiration_feed',
  ],
  ['getNoteInfoV1ApiV1XiaohongshuAppGetNoteInfoGet', '/api/v1/xiaohongshu/app/get_note_info'],
  ['getNoteInfoV2ApiV1XiaohongshuAppGetNoteInfoV2Get', '/api/v1/xiaohongshu/app/get_note_info_v2'],
  [
    'getNoteCommentsApiV1XiaohongshuAppGetNoteCommentsGet',
    '/api/v1/xiaohongshu/app/get_note_comments',
  ],
  [
    'getSubCommentsApiV1XiaohongshuAppGetSubCommentsGet',
    '/api/v1/xiaohongshu/app/get_sub_comments',
  ],
  [
    'getNotesByTopicApiV1XiaohongshuAppGetNotesByTopicGet',
    '/api/v1/xiaohongshu/app/get_notes_by_topic',
  ],
  ['searchNotesApiV1XiaohongshuAppSearchNotesGet', '/api/v1/xiaohongshu/app/search_notes'],
  ['getUserInfoApiV1XiaohongshuAppGetUserInfoGet', '/api/v1/xiaohongshu/app/get_user_info'],
  ['getUserNotesApiV1XiaohongshuAppGetUserNotesGet', '/api/v1/xiaohongshu/app/get_user_notes'],
  [
    'extractShareInfoApiV1XiaohongshuAppExtractShareInfoGet',
    '/api/v1/xiaohongshu/app/extract_share_info',
  ],
  [
    'getUserIdAndXsecTokenApiV1XiaohongshuAppGetUserIdAndXsecTokenGet',
    '/api/v1/xiaohongshu/app/get_user_id_and_xsec_token',
  ],
  [
    'getProductDetailApiV1XiaohongshuAppGetProductDetailGet',
    '/api/v1/xiaohongshu/app/get_product_detail',
  ],
  ['searchProductsApiV1XiaohongshuAppSearchProductsGet', '/api/v1/xiaohongshu/app/search_products'],
  [
    'fetchFeedNotesApiV1XiaohongshuWebV2FetchFeedNotesGet',
    '/api/v1/xiaohongshu/web_v2/fetch_feed_notes',
  ],
  [
    'fetchFeedNotesV2ApiV1XiaohongshuWebV2FetchFeedNotesV2Get',
    '/api/v1/xiaohongshu/web_v2/fetch_feed_notes_v2',
  ],
  [
    'fetchFeedNotesV3ApiV1XiaohongshuWebV2FetchFeedNotesV3Get',
    '/api/v1/xiaohongshu/web_v2/fetch_feed_notes_v3',
  ],
  [
    'fetchFeedNotesV4ApiV1XiaohongshuWebV2FetchFeedNotesV4Get',
    '/api/v1/xiaohongshu/web_v2/fetch_feed_notes_v4',
  ],
  [
    'fetchFeedNotesV5ApiV1XiaohongshuWebV2FetchFeedNotesV5Get',
    '/api/v1/xiaohongshu/web_v2/fetch_feed_notes_v5',
  ],
  [
    'fetchNoteImageApiV1XiaohongshuWebV2FetchNoteImageGet',
    '/api/v1/xiaohongshu/web_v2/fetch_note_image',
  ],
  [
    'fetchSearchNotesApiV1XiaohongshuWebV2FetchSearchNotesGet',
    '/api/v1/xiaohongshu/web_v2/fetch_search_notes',
  ],
  [
    'fetchSearchNotesApiV1XiaohongshuWebV2FetchSearchUsersGet',
    '/api/v1/xiaohongshu/web_v2/fetch_search_users',
  ],
  [
    'fetchHomeNotesApiV1XiaohongshuWebV2FetchHomeNotesGet',
    '/api/v1/xiaohongshu/web_v2/fetch_home_notes',
  ],
  [
    'fetchHomeNotesAppApiV1XiaohongshuWebV2FetchHomeNotesAppGet',
    '/api/v1/xiaohongshu/web_v2/fetch_home_notes_app',
  ],
  [
    'fetchNoteCommentsApiV1XiaohongshuWebV2FetchNoteCommentsGet',
    '/api/v1/xiaohongshu/web_v2/fetch_note_comments',
  ],
  [
    'fetchSubCommentsApiV1XiaohongshuWebV2FetchSubCommentsGet',
    '/api/v1/xiaohongshu/web_v2/fetch_sub_comments',
  ],
  [
    'fetchUserInfoApiV1XiaohongshuWebV2FetchUserInfoGet',
    '/api/v1/xiaohongshu/web_v2/fetch_user_info',
  ],
  [
    'fetchUserInfoApiV1XiaohongshuWebV2FetchUserInfoAppGet',
    '/api/v1/xiaohongshu/web_v2/fetch_user_info_app',
  ],
  [
    'fetchFollowerListApiV1XiaohongshuWebV2FetchFollowerListGet',
    '/api/v1/xiaohongshu/web_v2/fetch_follower_list',
  ],
  [
    'fetchFollowingListApiV1XiaohongshuWebV2FetchFollowingListGet',
    '/api/v1/xiaohongshu/web_v2/fetch_following_list',
  ],
  [
    'fetchProductListApiV1XiaohongshuWebV2FetchProductListGet',
    '/api/v1/xiaohongshu/web_v2/fetch_product_list',
  ],
  ['fetchHotListApiV1XiaohongshuWebV2FetchHotListGet', '/api/v1/xiaohongshu/web_v2/fetch_hot_list'],
  [
    'getHomeRecommendApiV1XiaohongshuWebGetHomeRecommendPost',
    '/api/v1/xiaohongshu/web/get_home_recommend',
  ],
  ['getNoteInfoV2ApiV1XiaohongshuWebGetNoteInfoV2Get', '/api/v1/xiaohongshu/web/get_note_info_v2'],
  ['getNoteInfoV4ApiV1XiaohongshuWebGetNoteInfoV4Get', '/api/v1/xiaohongshu/web/get_note_info_v4'],
  ['getNoteInfoV5ApiV1XiaohongshuWebGetNoteInfoV5Post', '/api/v1/xiaohongshu/web/get_note_info_v5'],
  ['getNoteInfoV7ApiV1XiaohongshuWebGetNoteInfoV7Get', '/api/v1/xiaohongshu/web/get_note_info_v7'],
  [
    'getNoteCommentsApiV1XiaohongshuWebGetNoteCommentsGet',
    '/api/v1/xiaohongshu/web/get_note_comments',
  ],
  [
    'getNoteCommentRepliesApiV1XiaohongshuWebGetNoteCommentRepliesGet',
    '/api/v1/xiaohongshu/web/get_note_comment_replies',
  ],
  ['getUserInfoApiV1XiaohongshuWebGetUserInfoGet', '/api/v1/xiaohongshu/web/get_user_info'],
  ['getUserInfoV2ApiV1XiaohongshuWebGetUserInfoV2Get', '/api/v1/xiaohongshu/web/get_user_info_v2'],
  ['searchNotesApiV1XiaohongshuWebSearchNotesGet', '/api/v1/xiaohongshu/web/search_notes'],
  ['searchNotesV3ApiV1XiaohongshuWebSearchNotesV3Get', '/api/v1/xiaohongshu/web/search_notes_v3'],
  ['searchUsersApiV1XiaohongshuWebSearchUsersGet', '/api/v1/xiaohongshu/web/search_users'],
  ['getUserNotesApiV1XiaohongshuWebGetUserNotesV2Get', '/api/v1/xiaohongshu/web/get_user_notes_v2'],
  [
    'getVisitorCookieApiV1XiaohongshuWebGetVisitorCookieGet',
    '/api/v1/xiaohongshu/web/get_visitor_cookie',
  ],
  ['signApiV1XiaohongshuWebSignPost', '/api/v1/xiaohongshu/web/sign'],
  [
    'getNoteIdAndXsecTokenApiV1XiaohongshuWebGetNoteIdAndXsecTokenGet',
    '/api/v1/xiaohongshu/web/get_note_id_and_xsec_token',
  ],
  [
    'getProductInfoApiV1XiaohongshuWebGetProductInfoGet',
    '/api/v1/xiaohongshu/web/get_product_info',
  ],
  ['handlerUserProfileApiV1Lemon8AppFetchUserProfileGet', '/api/v1/lemon8/app/fetch_user_profile'],
  ['fetchPostDetailApiV1Lemon8AppFetchPostDetailGet', '/api/v1/lemon8/app/fetch_post_detail'],
  [
    'fetchUserFollowerListApiV1Lemon8AppFetchUserFollowerListGet',
    '/api/v1/lemon8/app/fetch_user_follower_list',
  ],
  [
    'fetchUserFollowingListApiV1Lemon8AppFetchUserFollowingListGet',
    '/api/v1/lemon8/app/fetch_user_following_list',
  ],
  [
    'fetchPostCommentListApiV1Lemon8AppFetchPostCommentListGet',
    '/api/v1/lemon8/app/fetch_post_comment_list',
  ],
  [
    'fetchDiscoverBannersApiV1Lemon8AppFetchDiscoverBannersGet',
    '/api/v1/lemon8/app/fetch_discover_banners',
  ],
  ['fetchDiscoverTabApiV1Lemon8AppFetchDiscoverTabGet', '/api/v1/lemon8/app/fetch_discover_tab'],
  [
    'fetchDiscoverTabInformationTabsApiV1Lemon8AppFetchDiscoverTabInformationTabsGet',
    '/api/v1/lemon8/app/fetch_discover_tab_information_tabs',
  ],
  [
    'fetchHotSearchKeywordsApiV1Lemon8AppFetchHotSearchKeywordsGet',
    '/api/v1/lemon8/app/fetch_hot_search_keywords',
  ],
  ['fetchTopicInfoApiV1Lemon8AppFetchTopicInfoGet', '/api/v1/lemon8/app/fetch_topic_info'],
  [
    'fetchTopicPostListApiV1Lemon8AppFetchTopicPostListGet',
    '/api/v1/lemon8/app/fetch_topic_post_list',
  ],
  ['fetchSearchApiV1Lemon8AppFetchSearchGet', '/api/v1/lemon8/app/fetch_search'],
  ['getItemIdApiV1Lemon8AppGetItemIdGet', '/api/v1/lemon8/app/get_item_id'],
  ['getUserIdApiV1Lemon8AppGetUserIdGet', '/api/v1/lemon8/app/get_user_id'],
  ['getItemIdsApiV1Lemon8AppGetItemIdsPost', '/api/v1/lemon8/app/get_item_ids'],
  ['getUserIdsApiV1Lemon8AppGetUserIdsPost', '/api/v1/lemon8/app/get_user_ids'],
  ['fetchOneVideoApiV1KuaishouWebFetchOneVideoGet', '/api/v1/kuaishou/web/fetch_one_video'],
  ['fetchOneVideoV2ApiV1KuaishouWebFetchOneVideoV2Get', '/api/v1/kuaishou/web/fetch_one_video_v2'],
  [
    'fetchOneVideoByUrlApiV1KuaishouWebFetchOneVideoByUrlGet',
    '/api/v1/kuaishou/web/fetch_one_video_by_url',
  ],
  [
    'fetchOneVideoCommentApiV1KuaishouWebFetchOneVideoCommentGet',
    '/api/v1/kuaishou/web/fetch_one_video_comment',
  ],
  [
    'fetchOneVideoSubCommentApiV1KuaishouWebFetchOneVideoSubCommentGet',
    '/api/v1/kuaishou/web/fetch_one_video_sub_comment',
  ],
  [
    'generateShareShortUrlApiV1KuaishouWebGenerateShareShortUrlGet',
    '/api/v1/kuaishou/web/generate_share_short_url',
  ],
  ['fetchUserInfoApiV1KuaishouWebFetchUserInfoGet', '/api/v1/kuaishou/web/fetch_user_info'],
  ['fetchUserPostApiV1KuaishouWebFetchUserPostGet', '/api/v1/kuaishou/web/fetch_user_post'],
  [
    'fetchUserLiveReplayApiV1KuaishouWebFetchUserLiveReplayGet',
    '/api/v1/kuaishou/web/fetch_user_live_replay',
  ],
  [
    'fetchUserCollectApiV1KuaishouWebFetchUserCollectGet',
    '/api/v1/kuaishou/web/fetch_user_collect',
  ],
  [
    'fetchKuaishouHotListV1ApiV1KuaishouWebFetchKuaishouHotListV1Get',
    '/api/v1/kuaishou/web/fetch_kuaishou_hot_list_v1',
  ],
  [
    'fetchKuaishouHotListV2ApiV1KuaishouWebFetchKuaishouHotListV2Get',
    '/api/v1/kuaishou/web/fetch_kuaishou_hot_list_v2',
  ],
  ['fetchGetUserIdApiV1KuaishouWebFetchGetUserIdGet', '/api/v1/kuaishou/web/fetch_get_user_id'],
  ['fetchOneVideoV1ApiV1KuaishouAppFetchOneVideoGet', '/api/v1/kuaishou/app/fetch_one_video'],
  [
    'fetchVideosBatchApiV1KuaishouAppFetchVideosBatchGet',
    '/api/v1/kuaishou/app/fetch_videos_batch',
  ],
  [
    'fetchOneVideoByShareTextApiV1KuaishouAppFetchOneVideoByUrlGet',
    '/api/v1/kuaishou/app/fetch_one_video_by_url',
  ],
  [
    'fetchVideoCommentApiV1KuaishouAppFetchOneVideoCommentGet',
    '/api/v1/kuaishou/app/fetch_one_video_comment',
  ],
  ['fetchOneUserV2ApiV1KuaishouAppFetchOneUserV2Get', '/api/v1/kuaishou/app/fetch_one_user_v2'],
  [
    'fetchUserLiveInfoApiV1KuaishouAppFetchUserLiveInfoGet',
    '/api/v1/kuaishou/app/fetch_user_live_info',
  ],
  [
    'fetchUserHotPostApiV1KuaishouAppFetchUserHotPostGet',
    '/api/v1/kuaishou/app/fetch_user_hot_post',
  ],
  ['fetchUserPostV2ApiV1KuaishouAppFetchUserPostV2Get', '/api/v1/kuaishou/app/fetch_user_post_v2'],
  [
    'searchComprehensiveApiV1KuaishouAppSearchComprehensiveGet',
    '/api/v1/kuaishou/app/search_comprehensive',
  ],
  ['searchVideoV2ApiV1KuaishouAppSearchVideoV2Get', '/api/v1/kuaishou/app/search_video_v2'],
  ['searchUserV2ApiV1KuaishouAppSearchUserV2Get', '/api/v1/kuaishou/app/search_user_v2'],
  [
    'fetchHotBoardCategoriesApiV1KuaishouAppFetchHotBoardCategoriesGet',
    '/api/v1/kuaishou/app/fetch_hot_board_categories',
  ],
  [
    'fetchHotBoardDetailApiV1KuaishouAppFetchHotBoardDetailGet',
    '/api/v1/kuaishou/app/fetch_hot_board_detail',
  ],
  [
    'fetchHotSearchPersonApiV1KuaishouAppFetchHotSearchPersonGet',
    '/api/v1/kuaishou/app/fetch_hot_search_person',
  ],
  [
    'fetchLiveTopListApiV1KuaishouAppFetchLiveTopListGet',
    '/api/v1/kuaishou/app/fetch_live_top_list',
  ],
  [
    'fetchShoppingTopListApiV1KuaishouAppFetchShoppingTopListGet',
    '/api/v1/kuaishou/app/fetch_shopping_top_list',
  ],
  [
    'fetchBrandTopListApiV1KuaishouAppFetchBrandTopListGet',
    '/api/v1/kuaishou/app/fetch_brand_top_list',
  ],
  [
    'generateKuaishouShareLinkApiV1KuaishouAppGenerateKuaishouShareLinkGet',
    '/api/v1/kuaishou/app/generate_kuaishou_share_link',
  ],
  [
    'fetchMagicFaceUsageApiV1KuaishouAppFetchMagicFaceUsageGet',
    '/api/v1/kuaishou/app/fetch_magic_face_usage',
  ],
  [
    'fetchMagicFaceHotApiV1KuaishouAppFetchMagicFaceHotGet',
    '/api/v1/kuaishou/app/fetch_magic_face_hot',
  ],
  [
    'fetchColumnArticlesApiV1ZhihuWebFetchColumnArticlesGet',
    '/api/v1/zhihu/web/fetch_column_articles',
  ],
  [
    'fetchColumnArticleDetailApiV1ZhihuWebFetchColumnArticleDetailGet',
    '/api/v1/zhihu/web/fetch_column_article_detail',
  ],
  [
    'fetchColumnRecommendApiV1ZhihuWebFetchColumnRecommendGet',
    '/api/v1/zhihu/web/fetch_column_recommend',
  ],
  [
    'fetchColumnRelationshipApiV1ZhihuWebFetchColumnRelationshipGet',
    '/api/v1/zhihu/web/fetch_column_relationship',
  ],
  [
    'fetchColumnCommentConfigApiV1ZhihuWebFetchColumnCommentConfigGet',
    '/api/v1/zhihu/web/fetch_column_comment_config',
  ],
  ['fetchHotRecommendApiV1ZhihuWebFetchHotRecommendGet', '/api/v1/zhihu/web/fetch_hot_recommend'],
  ['fetchHotListApiV1ZhihuWebFetchHotListGet', '/api/v1/zhihu/web/fetch_hot_list'],
  ['fetchVideoListApiV1ZhihuWebFetchVideoListGet', '/api/v1/zhihu/web/fetch_video_list'],
  [
    'fetchArticleSearchV3ApiV1ZhihuWebFetchArticleSearchV3Get',
    '/api/v1/zhihu/web/fetch_article_search_v3',
  ],
  ['fetchUserSearchV3ApiV1ZhihuWebFetchUserSearchV3Get', '/api/v1/zhihu/web/fetch_user_search_v3'],
  [
    'fetchTopicSearchV3ApiV1ZhihuWebFetchTopicSearchV3Get',
    '/api/v1/zhihu/web/fetch_topic_search_v3',
  ],
  [
    'fetchScholarSearchV3ApiV1ZhihuWebFetchScholarSearchV3Post',
    '/api/v1/zhihu/web/fetch_scholar_search_v3',
  ],
  ['fetchAiSearchApiV1ZhihuWebFetchAiSearchGet', '/api/v1/zhihu/web/fetch_ai_search'],
  [
    'fetchAiSearchResultApiV1ZhihuWebFetchAiSearchResultGet',
    '/api/v1/zhihu/web/fetch_ai_search_result',
  ],
  [
    'fetchVideoSearchV3ApiV1ZhihuWebFetchVideoSearchV3Get',
    '/api/v1/zhihu/web/fetch_video_search_v3',
  ],
  [
    'fetchColumnSearchV3ApiV1ZhihuWebFetchColumnSearchV3Get',
    '/api/v1/zhihu/web/fetch_column_search_v3',
  ],
  ['fetchSaltSearchV3ApiV1ZhihuWebFetchSaltSearchV3Get', '/api/v1/zhihu/web/fetch_salt_search_v3'],
  [
    'fetchEbookSearchV3ApiV1ZhihuWebFetchEbookSearchV3Get',
    '/api/v1/zhihu/web/fetch_ebook_search_v3',
  ],
  ['fetchPresetSearchApiV1ZhihuWebFetchPresetSearchGet', '/api/v1/zhihu/web/fetch_preset_search'],
  [
    'fetchSearchRecommendApiV1ZhihuWebFetchSearchRecommendGet',
    '/api/v1/zhihu/web/fetch_search_recommend',
  ],
  [
    'fetchSearchSuggestApiV1ZhihuWebFetchSearchSuggestGet',
    '/api/v1/zhihu/web/fetch_search_suggest',
  ],
  ['fetchCommentV5ApiV1ZhihuWebFetchCommentV5Get', '/api/v1/zhihu/web/fetch_comment_v5'],
  ['fetchSubCommentV5ApiV1ZhihuWebFetchSubCommentV5Get', '/api/v1/zhihu/web/fetch_sub_comment_v5'],
  ['fetchUserInfoApiV1ZhihuWebFetchUserInfoGet', '/api/v1/zhihu/web/fetch_user_info'],
  [
    'fetchUserFolloweesApiV1ZhihuWebFetchUserFolloweesGet',
    '/api/v1/zhihu/web/fetch_user_followees',
  ],
  [
    'fetchUserFollowersApiV1ZhihuWebFetchUserFollowersGet',
    '/api/v1/zhihu/web/fetch_user_followers',
  ],
  [
    'fetchUserFollowColumnsApiV1ZhihuWebFetchUserFollowColumnsGet',
    '/api/v1/zhihu/web/fetch_user_follow_columns',
  ],
  [
    'fetchUserFollowQuestionsApiV1ZhihuWebFetchUserFollowQuestionsGet',
    '/api/v1/zhihu/web/fetch_user_follow_questions',
  ],
  [
    'fetchUserFollowCollectionsApiV1ZhihuWebFetchUserFollowCollectionsGet',
    '/api/v1/zhihu/web/fetch_user_follow_collections',
  ],
  [
    'fetchUserFollowTopicsApiV1ZhihuWebFetchUserFollowTopicsGet',
    '/api/v1/zhihu/web/fetch_user_follow_topics',
  ],
  [
    'fetchRecommendFolloweesApiV1ZhihuWebFetchRecommendFolloweesGet',
    '/api/v1/zhihu/web/fetch_recommend_followees',
  ],
  [
    'fetchQuestionAnswersApiV1ZhihuWebFetchQuestionAnswersGet',
    '/api/v1/zhihu/web/fetch_question_answers',
  ],
  ['fetchPostDetailApiV1PipixiaAppFetchPostDetailGet', '/api/v1/pipixia/app/fetch_post_detail'],
  [
    'fetchIncreasePostViewCountApiV1PipixiaAppFetchIncreasePostViewCountGet',
    '/api/v1/pipixia/app/fetch_increase_post_view_count',
  ],
  [
    'fetchPostStatisticsApiV1PipixiaAppFetchPostStatisticsGet',
    '/api/v1/pipixia/app/fetch_post_statistics',
  ],
  ['fetchUserInfoApiV1PipixiaAppFetchUserInfoGet', '/api/v1/pipixia/app/fetch_user_info'],
  [
    'fetchUserPostListApiV1PipixiaAppFetchUserPostListGet',
    '/api/v1/pipixia/app/fetch_user_post_list',
  ],
  [
    'fetchUserFollowerListApiV1PipixiaAppFetchUserFollowerListGet',
    '/api/v1/pipixia/app/fetch_user_follower_list',
  ],
  [
    'fetchUserFollowingListApiV1PipixiaAppFetchUserFollowingListGet',
    '/api/v1/pipixia/app/fetch_user_following_list',
  ],
  [
    'fetchPostCommentListApiV1PipixiaAppFetchPostCommentListGet',
    '/api/v1/pipixia/app/fetch_post_comment_list',
  ],
  ['fetchShortUrlApiV1PipixiaAppFetchShortUrlGet', '/api/v1/pipixia/app/fetch_short_url'],
  ['fetchHomeFeedApiV1PipixiaAppFetchHomeFeedGet', '/api/v1/pipixia/app/fetch_home_feed'],
  [
    'fetchHotSearchWordsApiV1PipixiaAppFetchHotSearchWordsGet',
    '/api/v1/pipixia/app/fetch_hot_search_words',
  ],
  [
    'fetchHotSearchBoardListApiV1PipixiaAppFetchHotSearchBoardListGet',
    '/api/v1/pipixia/app/fetch_hot_search_board_list',
  ],
  [
    'fetchHotSearchBoardDetailApiV1PipixiaAppFetchHotSearchBoardDetailGet',
    '/api/v1/pipixia/app/fetch_hot_search_board_detail',
  ],
  ['fetchSearchApiV1PipixiaAppFetchSearchGet', '/api/v1/pipixia/app/fetch_search'],
  [
    'fetchHashtagDetailApiV1PipixiaAppFetchHashtagDetailGet',
    '/api/v1/pipixia/app/fetch_hashtag_detail',
  ],
  [
    'fetchHashtagPostListApiV1PipixiaAppFetchHashtagPostListGet',
    '/api/v1/pipixia/app/fetch_hashtag_post_list',
  ],
  [
    'fetchHomeShortDramaFeedApiV1PipixiaAppFetchHomeShortDramaFeedGet',
    '/api/v1/pipixia/app/fetch_home_short_drama_feed',
  ],
  ['fetchConfigListApiV1WeiboWebFetchConfigListGet', '/api/v1/weibo/web/fetch_config_list'],
  ['fetchTrendTopApiV1WeiboWebFetchTrendTopGet', '/api/v1/weibo/web/fetch_trend_top'],
  ['fetchChannelFeedApiV1WeiboWebFetchChannelFeedGet', '/api/v1/weibo/web/fetch_channel_feed'],
  ['fetchUserInfoApiV1WeiboWebFetchUserInfoGet', '/api/v1/weibo/web/fetch_user_info'],
  ['fetchUserPostsApiV1WeiboWebFetchUserPostsGet', '/api/v1/weibo/web/fetch_user_posts'],
  ['fetchPostDetailApiV1WeiboWebFetchPostDetailGet', '/api/v1/weibo/web/fetch_post_detail'],
  ['fetchPostCommentsApiV1WeiboWebFetchPostCommentsGet', '/api/v1/weibo/web/fetch_post_comments'],
  [
    'fetchCommentRepliesApiV1WeiboWebFetchCommentRepliesGet',
    '/api/v1/weibo/web/fetch_comment_replies',
  ],
  ['fetchSearchApiV1WeiboWebFetchSearchGet', '/api/v1/weibo/web/fetch_search'],
  ['fetchHotSearchApiV1WeiboWebFetchHotSearchGet', '/api/v1/weibo/web/fetch_hot_search'],
  ['fetchSearchTopicsApiV1WeiboWebFetchSearchTopicsGet', '/api/v1/weibo/web/fetch_search_topics'],
  [
    'checkAllowCommentWithPicApiV1WeiboWebV2CheckAllowCommentWithPicGet',
    '/api/v1/weibo/web_v2/check_allow_comment_with_pic',
  ],
  ['fetchPostDetailApiV1WeiboWebV2FetchPostDetailGet', '/api/v1/weibo/web_v2/fetch_post_detail'],
  ['fetchUserInfoApiV1WeiboWebV2FetchUserInfoGet', '/api/v1/weibo/web_v2/fetch_user_info'],
  [
    'fetchUserBasicInfoApiV1WeiboWebV2FetchUserBasicInfoGet',
    '/api/v1/weibo/web_v2/fetch_user_basic_info',
  ],
  ['fetchUserPostsApiV1WeiboWebV2FetchUserPostsGet', '/api/v1/weibo/web_v2/fetch_user_posts'],
  [
    'fetchUserOriginalPostsApiV1WeiboWebV2FetchUserOriginalPostsGet',
    '/api/v1/weibo/web_v2/fetch_user_original_posts',
  ],
  [
    'fetchPostCommentsApiV1WeiboWebV2FetchPostCommentsGet',
    '/api/v1/weibo/web_v2/fetch_post_comments',
  ],
  [
    'fetchPostSubCommentsApiV1WeiboWebV2FetchPostSubCommentsGet',
    '/api/v1/weibo/web_v2/fetch_post_sub_comments',
  ],
  ['searchUserPostsApiV1WeiboWebV2SearchUserPostsGet', '/api/v1/weibo/web_v2/search_user_posts'],
  [
    'fetchUserVideoCollectionListApiV1WeiboWebV2FetchUserVideoCollectionListGet',
    '/api/v1/weibo/web_v2/fetch_user_video_collection_list',
  ],
  [
    'fetchUserVideoCollectionDetailApiV1WeiboWebV2FetchUserVideoCollectionDetailGet',
    '/api/v1/weibo/web_v2/fetch_user_video_collection_detail',
  ],
  [
    'fetchUserVideoListApiV1WeiboWebV2FetchUserVideoListGet',
    '/api/v1/weibo/web_v2/fetch_user_video_list',
  ],
  [
    'fetchUserFollowingApiV1WeiboWebV2FetchUserFollowingGet',
    '/api/v1/weibo/web_v2/fetch_user_following',
  ],
  ['fetchUserFansApiV1WeiboWebV2FetchUserFansGet', '/api/v1/weibo/web_v2/fetch_user_fans'],
  ['fetchAllGroupsApiV1WeiboWebV2FetchAllGroupsGet', '/api/v1/weibo/web_v2/fetch_all_groups'],
  [
    'fetchUserRecommendTimelineApiV1WeiboWebV2FetchUserRecommendTimelineGet',
    '/api/v1/weibo/web_v2/fetch_user_recommend_timeline',
  ],
  [
    'fetchHotRankingTimelineApiV1WeiboWebV2FetchHotRankingTimelineGet',
    '/api/v1/weibo/web_v2/fetch_hot_ranking_timeline',
  ],
  [
    'fetchHotSearchIndexApiV1WeiboWebV2FetchHotSearchIndexGet',
    '/api/v1/weibo/web_v2/fetch_hot_search_index',
  ],
  [
    'fetchHotSearchSummaryApiV1WeiboWebV2FetchHotSearchSummaryGet',
    '/api/v1/weibo/web_v2/fetch_hot_search_summary',
  ],
  ['fetchHotSearchApiV1WeiboWebV2FetchHotSearchGet', '/api/v1/weibo/web_v2/fetch_hot_search'],
  [
    'fetchEntertainmentRankingApiV1WeiboWebV2FetchEntertainmentRankingGet',
    '/api/v1/weibo/web_v2/fetch_entertainment_ranking',
  ],
  ['fetchLifeRankingApiV1WeiboWebV2FetchLifeRankingGet', '/api/v1/weibo/web_v2/fetch_life_ranking'],
  [
    'fetchSocialRankingApiV1WeiboWebV2FetchSocialRankingGet',
    '/api/v1/weibo/web_v2/fetch_social_ranking',
  ],
  [
    'fetchSimilarSearchApiV1WeiboWebV2FetchSimilarSearchGet',
    '/api/v1/weibo/web_v2/fetch_similar_search',
  ],
  ['fetchAiSearchApiV1WeiboWebV2FetchAiSearchGet', '/api/v1/weibo/web_v2/fetch_ai_search'],
  [
    'fetchAiRelatedSearchApiV1WeiboWebV2FetchAiRelatedSearchGet',
    '/api/v1/weibo/web_v2/fetch_ai_related_search',
  ],
  [
    'fetchAdvancedSearchApiV1WeiboWebV2FetchAdvancedSearchGet',
    '/api/v1/weibo/web_v2/fetch_advanced_search',
  ],
  ['fetchCityListApiV1WeiboWebV2FetchCityListGet', '/api/v1/weibo/web_v2/fetch_city_list'],
  [
    'fetchRealtimeSearchApiV1WeiboWebV2FetchRealtimeSearchGet',
    '/api/v1/weibo/web_v2/fetch_realtime_search',
  ],
  ['fetchUserSearchApiV1WeiboWebV2FetchUserSearchGet', '/api/v1/weibo/web_v2/fetch_user_search'],
  ['fetchVideoSearchApiV1WeiboWebV2FetchVideoSearchGet', '/api/v1/weibo/web_v2/fetch_video_search'],
  ['fetchPicSearchApiV1WeiboWebV2FetchPicSearchGet', '/api/v1/weibo/web_v2/fetch_pic_search'],
  ['fetchTopicSearchApiV1WeiboWebV2FetchTopicSearchGet', '/api/v1/weibo/web_v2/fetch_topic_search'],
  ['fetchUserInfoApiV1WeiboAppFetchUserInfoGet', '/api/v1/weibo/app/fetch_user_info'],
  [
    'fetchUserInfoDetailApiV1WeiboAppFetchUserInfoDetailGet',
    '/api/v1/weibo/app/fetch_user_info_detail',
  ],
  ['fetchUserTimelineApiV1WeiboAppFetchUserTimelineGet', '/api/v1/weibo/app/fetch_user_timeline'],
  ['fetchUserVideosApiV1WeiboAppFetchUserVideosGet', '/api/v1/weibo/app/fetch_user_videos'],
  [
    'fetchUserSuperTopicsApiV1WeiboAppFetchUserSuperTopicsGet',
    '/api/v1/weibo/app/fetch_user_super_topics',
  ],
  ['fetchUserAlbumApiV1WeiboAppFetchUserAlbumGet', '/api/v1/weibo/app/fetch_user_album'],
  ['fetchUserArticlesApiV1WeiboAppFetchUserArticlesGet', '/api/v1/weibo/app/fetch_user_articles'],
  ['fetchUserAudiosApiV1WeiboAppFetchUserAudiosGet', '/api/v1/weibo/app/fetch_user_audios'],
  [
    'fetchUserProfileFeedApiV1WeiboAppFetchUserProfileFeedGet',
    '/api/v1/weibo/app/fetch_user_profile_feed',
  ],
  ['fetchStatusDetailApiV1WeiboAppFetchStatusDetailGet', '/api/v1/weibo/app/fetch_status_detail'],
  [
    'fetchStatusCommentsApiV1WeiboAppFetchStatusCommentsGet',
    '/api/v1/weibo/app/fetch_status_comments',
  ],
  [
    'fetchStatusRepostsApiV1WeiboAppFetchStatusRepostsGet',
    '/api/v1/weibo/app/fetch_status_reposts',
  ],
  ['fetchStatusLikesApiV1WeiboAppFetchStatusLikesGet', '/api/v1/weibo/app/fetch_status_likes'],
  ['fetchVideoDetailApiV1WeiboAppFetchVideoDetailGet', '/api/v1/weibo/app/fetch_video_detail'],
  [
    'fetchVideoFeaturedFeedApiV1WeiboAppFetchVideoFeaturedFeedGet',
    '/api/v1/weibo/app/fetch_video_featured_feed',
  ],
  ['fetchSearchAllApiV1WeiboAppFetchSearchAllGet', '/api/v1/weibo/app/fetch_search_all'],
  [
    'fetchAiSmartSearchApiV1WeiboAppFetchAiSmartSearchGet',
    '/api/v1/weibo/app/fetch_ai_smart_search',
  ],
  [
    'fetchHomeRecommendFeedApiV1WeiboAppFetchHomeRecommendFeedGet',
    '/api/v1/weibo/app/fetch_home_recommend_feed',
  ],
  ['fetchHotSearchApiV1WeiboAppFetchHotSearchGet', '/api/v1/weibo/app/fetch_hot_search'],
  [
    'fetchHotSearchCategoriesApiV1WeiboAppFetchHotSearchCategoriesGet',
    '/api/v1/weibo/app/fetch_hot_search_categories',
  ],
  [
    'fetchMpArticleDetailJsonApiV1WechatMpWebFetchMpArticleDetailJsonGet',
    '/api/v1/wechat_mp/web/fetch_mp_article_detail_json',
  ],
  [
    'fetchMpArticleDetailHtmlApiV1WechatMpWebFetchMpArticleDetailHtmlGet',
    '/api/v1/wechat_mp/web/fetch_mp_article_detail_html',
  ],
  [
    'fetchMpArticleListApiV1WechatMpWebFetchMpArticleListGet',
    '/api/v1/wechat_mp/web/fetch_mp_article_list',
  ],
  [
    'fetchMpArticleReadCountApiV1WechatMpWebFetchMpArticleReadCountGet',
    '/api/v1/wechat_mp/web/fetch_mp_article_read_count',
  ],
  [
    'fetchMpArticleUrlApiV1WechatMpWebFetchMpArticleUrlGet',
    '/api/v1/wechat_mp/web/fetch_mp_article_url',
  ],
  [
    'fetchMpArticleCommentListApiV1WechatMpWebFetchMpArticleCommentListGet',
    '/api/v1/wechat_mp/web/fetch_mp_article_comment_list',
  ],
  [
    'fetchMpArticleCommentReplyListApiV1WechatMpWebFetchMpArticleCommentReplyListGet',
    '/api/v1/wechat_mp/web/fetch_mp_article_comment_reply_list',
  ],
  [
    'fetchMpArticleAdApiV1WechatMpWebFetchMpArticleAdGet',
    '/api/v1/wechat_mp/web/fetch_mp_article_ad',
  ],
  [
    'fetchMpArticleUrlConversionApiV1WechatMpWebFetchMpArticleUrlConversionGet',
    '/api/v1/wechat_mp/web/fetch_mp_article_url_conversion',
  ],
  [
    'fetchMpRelatedArticlesApiV1WechatMpWebFetchMpRelatedArticlesGet',
    '/api/v1/wechat_mp/web/fetch_mp_related_articles',
  ],
  [
    'fetchDefaultSearchApiV1WechatChannelsFetchDefaultSearchPost',
    '/api/v1/wechat_channels/fetch_default_search',
  ],
  [
    'fetchSearchLatestApiV1WechatChannelsFetchSearchLatestGet',
    '/api/v1/wechat_channels/fetch_search_latest',
  ],
  [
    'fetchSearchOrdinaryApiV1WechatChannelsFetchSearchOrdinaryGet',
    '/api/v1/wechat_channels/fetch_search_ordinary',
  ],
  [
    'fetchUserSearchApiV1WechatChannelsFetchUserSearchGet',
    '/api/v1/wechat_channels/fetch_user_search',
  ],
  [
    'fetchVideoDetailApiV1WechatChannelsFetchVideoDetailGet',
    '/api/v1/wechat_channels/fetch_video_detail',
  ],
  ['fetchHomePageApiV1WechatChannelsFetchHomePagePost', '/api/v1/wechat_channels/fetch_home_page'],
  ['fetchCommentsApiV1WechatChannelsFetchCommentsPost', '/api/v1/wechat_channels/fetch_comments'],
  [
    'fetchLiveHistoryApiV1WechatChannelsFetchLiveHistoryGet',
    '/api/v1/wechat_channels/fetch_live_history',
  ],
  ['fetchHotWordsApiV1WechatChannelsFetchHotWordsGet', '/api/v1/wechat_channels/fetch_hot_words'],
  [
    'shortcodeToMediaIdApiV1InstagramV1ShortcodeToMediaIdGet',
    '/api/v1/instagram/v1/shortcode_to_media_id',
  ],
  [
    'mediaIdToShortcodeApiV1InstagramV1MediaIdToShortcodeGet',
    '/api/v1/instagram/v1/media_id_to_shortcode',
  ],
  [
    'userIdToUsernameApiV1InstagramV1UserIdToUsernameGet',
    '/api/v1/instagram/v1/user_id_to_username',
  ],
  [
    'fetchUserInfoByUsernameApiV1InstagramV1FetchUserInfoByUsernameGet',
    '/api/v1/instagram/v1/fetch_user_info_by_username',
  ],
  [
    'fetchUserInfoByUsernameV2ApiV1InstagramV1FetchUserInfoByUsernameV2Get',
    '/api/v1/instagram/v1/fetch_user_info_by_username_v2',
  ],
  [
    'fetchUserInfoByUsernameV3ApiV1InstagramV1FetchUserInfoByUsernameV3Get',
    '/api/v1/instagram/v1/fetch_user_info_by_username_v3',
  ],
  [
    'fetchUserInfoByIdApiV1InstagramV1FetchUserInfoByIdGet',
    '/api/v1/instagram/v1/fetch_user_info_by_id',
  ],
  [
    'fetchUserInfoByIdV2ApiV1InstagramV1FetchUserInfoByIdV2Get',
    '/api/v1/instagram/v1/fetch_user_info_by_id_v2',
  ],
  [
    'fetchUserAboutInfoApiV1InstagramV1FetchUserAboutInfoGet',
    '/api/v1/instagram/v1/fetch_user_about_info',
  ],
  ['fetchUserPostsApiV1InstagramV1FetchUserPostsGet', '/api/v1/instagram/v1/fetch_user_posts'],
  [
    'fetchUserPostsV2ApiV1InstagramV1FetchUserPostsV2Get',
    '/api/v1/instagram/v1/fetch_user_posts_v2',
  ],
  ['fetchUserReelsApiV1InstagramV1FetchUserReelsGet', '/api/v1/instagram/v1/fetch_user_reels'],
  [
    'fetchUserRepostsApiV1InstagramV1FetchUserRepostsGet',
    '/api/v1/instagram/v1/fetch_user_reposts',
  ],
  [
    'fetchUserTaggedPostsApiV1InstagramV1FetchUserTaggedPostsGet',
    '/api/v1/instagram/v1/fetch_user_tagged_posts',
  ],
  [
    'fetchRelatedProfilesApiV1InstagramV1FetchRelatedProfilesGet',
    '/api/v1/instagram/v1/fetch_related_profiles',
  ],
  ['fetchSearchApiV1InstagramV1FetchSearchGet', '/api/v1/instagram/v1/fetch_search'],
  ['fetchPostByUrlApiV1InstagramV1FetchPostByUrlGet', '/api/v1/instagram/v1/fetch_post_by_url'],
  [
    'fetchPostByUrlV2ApiV1InstagramV1FetchPostByUrlV2Get',
    '/api/v1/instagram/v1/fetch_post_by_url_v2',
  ],
  ['fetchPostByIdApiV1InstagramV1FetchPostByIdGet', '/api/v1/instagram/v1/fetch_post_by_id'],
  [
    'fetchPostCommentsV2ApiV1InstagramV1FetchPostCommentsV2Get',
    '/api/v1/instagram/v1/fetch_post_comments_v2',
  ],
  [
    'fetchCommentRepliesApiV1InstagramV1FetchCommentRepliesGet',
    '/api/v1/instagram/v1/fetch_comment_replies',
  ],
  ['fetchMusicPostsApiV1InstagramV1FetchMusicPostsGet', '/api/v1/instagram/v1/fetch_music_posts'],
  [
    'fetchHashtagPostsApiV1InstagramV1FetchHashtagPostsGet',
    '/api/v1/instagram/v1/fetch_hashtag_posts',
  ],
  [
    'fetchLocationInfoApiV1InstagramV1FetchLocationInfoGet',
    '/api/v1/instagram/v1/fetch_location_info',
  ],
  [
    'fetchLocationPostsApiV1InstagramV1FetchLocationPostsGet',
    '/api/v1/instagram/v1/fetch_location_posts',
  ],
  ['fetchCitiesApiV1InstagramV1FetchCitiesGet', '/api/v1/instagram/v1/fetch_cities'],
  ['fetchLocationsApiV1InstagramV1FetchLocationsGet', '/api/v1/instagram/v1/fetch_locations'],
  [
    'fetchExploreSectionsApiV1InstagramV1FetchExploreSectionsGet',
    '/api/v1/instagram/v1/fetch_explore_sections',
  ],
  [
    'fetchSectionPostsApiV1InstagramV1FetchSectionPostsGet',
    '/api/v1/instagram/v1/fetch_section_posts',
  ],
  [
    'shortcodeToMediaIdApiV1InstagramV2ShortcodeToMediaIdGet',
    '/api/v1/instagram/v2/shortcode_to_media_id',
  ],
  [
    'mediaIdToShortcodeApiV1InstagramV2MediaIdToShortcodeGet',
    '/api/v1/instagram/v2/media_id_to_shortcode',
  ],
  [
    'userIdToUsernameApiV1InstagramV2UserIdToUsernameGet',
    '/api/v1/instagram/v2/user_id_to_username',
  ],
  ['fetchUserInfoApiV1InstagramV2FetchUserInfoGet', '/api/v1/instagram/v2/fetch_user_info'],
  ['fetchUserPostsApiV1InstagramV2FetchUserPostsGet', '/api/v1/instagram/v2/fetch_user_posts'],
  ['fetchUserReelsApiV1InstagramV2FetchUserReelsGet', '/api/v1/instagram/v2/fetch_user_reels'],
  [
    'fetchUserFollowersApiV1InstagramV2FetchUserFollowersGet',
    '/api/v1/instagram/v2/fetch_user_followers',
  ],
  [
    'fetchUserFollowingApiV1InstagramV2FetchUserFollowingGet',
    '/api/v1/instagram/v2/fetch_user_following',
  ],
  [
    'fetchUserStoriesApiV1InstagramV2FetchUserStoriesGet',
    '/api/v1/instagram/v2/fetch_user_stories',
  ],
  [
    'fetchUserHighlightsApiV1InstagramV2FetchUserHighlightsGet',
    '/api/v1/instagram/v2/fetch_user_highlights',
  ],
  [
    'fetchHighlightStoriesApiV1InstagramV2FetchHighlightStoriesGet',
    '/api/v1/instagram/v2/fetch_highlight_stories',
  ],
  [
    'fetchUserTaggedPostsApiV1InstagramV2FetchUserTaggedPostsGet',
    '/api/v1/instagram/v2/fetch_user_tagged_posts',
  ],
  [
    'fetchSimilarUsersApiV1InstagramV2FetchSimilarUsersGet',
    '/api/v1/instagram/v2/fetch_similar_users',
  ],
  ['searchUsersApiV1InstagramV2SearchUsersGet', '/api/v1/instagram/v2/search_users'],
  ['generalSearchApiV1InstagramV2GeneralSearchGet', '/api/v1/instagram/v2/general_search'],
  ['searchReelsApiV1InstagramV2SearchReelsGet', '/api/v1/instagram/v2/search_reels'],
  ['searchMusicApiV1InstagramV2SearchMusicGet', '/api/v1/instagram/v2/search_music'],
  ['searchHashtagsApiV1InstagramV2SearchHashtagsGet', '/api/v1/instagram/v2/search_hashtags'],
  ['searchLocationsApiV1InstagramV2SearchLocationsGet', '/api/v1/instagram/v2/search_locations'],
  [
    'searchByCoordinatesApiV1InstagramV2SearchByCoordinatesGet',
    '/api/v1/instagram/v2/search_by_coordinates',
  ],
  ['fetchPostInfoApiV1InstagramV2FetchPostInfoGet', '/api/v1/instagram/v2/fetch_post_info'],
  ['fetchPostLikesApiV1InstagramV2FetchPostLikesGet', '/api/v1/instagram/v2/fetch_post_likes'],
  [
    'fetchPostCommentsApiV1InstagramV2FetchPostCommentsGet',
    '/api/v1/instagram/v2/fetch_post_comments',
  ],
  [
    'fetchCommentRepliesApiV1InstagramV2FetchCommentRepliesGet',
    '/api/v1/instagram/v2/fetch_comment_replies',
  ],
  ['fetchMusicPostsApiV1InstagramV2FetchMusicPostsGet', '/api/v1/instagram/v2/fetch_music_posts'],
  [
    'fetchLocationPostsApiV1InstagramV2FetchLocationPostsGet',
    '/api/v1/instagram/v2/fetch_location_posts',
  ],
  [
    'fetchHashtagPostsApiV1InstagramV2FetchHashtagPostsGet',
    '/api/v1/instagram/v2/fetch_hashtag_posts',
  ],
  ['searchUsersApiV1InstagramV3SearchUsersGet', '/api/v1/instagram/v3/search_users'],
  ['searchHashtagsApiV1InstagramV3SearchHashtagsGet', '/api/v1/instagram/v3/search_hashtags'],
  ['searchPlacesApiV1InstagramV3SearchPlacesGet', '/api/v1/instagram/v3/search_places'],
  ['generalSearchApiV1InstagramV3GeneralSearchGet', '/api/v1/instagram/v3/general_search'],
  ['getUserProfileApiV1InstagramV3GetUserProfileGet', '/api/v1/instagram/v3/get_user_profile'],
  ['getUserBriefApiV1InstagramV3GetUserBriefGet', '/api/v1/instagram/v3/get_user_brief'],
  ['getUserPostsApiV1InstagramV3GetUserPostsGet', '/api/v1/instagram/v3/get_user_posts'],
  [
    'getUserTaggedPostsApiV1InstagramV3GetUserTaggedPostsGet',
    '/api/v1/instagram/v3/get_user_tagged_posts',
  ],
  ['getUserReelsApiV1InstagramV3GetUserReelsGet', '/api/v1/instagram/v3/get_user_reels'],
  [
    'getUserHighlightsApiV1InstagramV3GetUserHighlightsGet',
    '/api/v1/instagram/v3/get_user_highlights',
  ],
  [
    'getHighlightStoriesApiV1InstagramV3GetHighlightStoriesGet',
    '/api/v1/instagram/v3/get_highlight_stories',
  ],
  ['getUserAboutApiV1InstagramV3GetUserAboutGet', '/api/v1/instagram/v3/get_user_about'],
  [
    'getUserFormerUsernamesApiV1InstagramV3GetUserFormerUsernamesGet',
    '/api/v1/instagram/v3/get_user_former_usernames',
  ],
  ['getUserStoriesApiV1InstagramV3GetUserStoriesGet', '/api/v1/instagram/v3/get_user_stories'],
  [
    'getRecommendedReelsApiV1InstagramV3GetRecommendedReelsGet',
    '/api/v1/instagram/v3/get_recommended_reels',
  ],
  ['getPostInfoApiV1InstagramV3GetPostInfoGet', '/api/v1/instagram/v3/get_post_info'],
  [
    'getPostInfoByCodeApiV1InstagramV3GetPostInfoByCodeGet',
    '/api/v1/instagram/v3/get_post_info_by_code',
  ],
  ['getPostCommentsApiV1InstagramV3GetPostCommentsGet', '/api/v1/instagram/v3/get_post_comments'],
  [
    'getCommentRepliesApiV1InstagramV3GetCommentRepliesGet',
    '/api/v1/instagram/v3/get_comment_replies',
  ],
  ['getPostOembedApiV1InstagramV3GetPostOembedGet', '/api/v1/instagram/v3/get_post_oembed'],
  ['translateCommentApiV1InstagramV3TranslateCommentGet', '/api/v1/instagram/v3/translate_comment'],
  [
    'bulkTranslateCommentsApiV1InstagramV3BulkTranslateCommentsGet',
    '/api/v1/instagram/v3/bulk_translate_comments',
  ],
  ['getExploreApiV1InstagramV3GetExploreGet', '/api/v1/instagram/v3/get_explore'],
  [
    'getUserFollowingApiV1InstagramV3GetUserFollowingGet',
    '/api/v1/instagram/v3/get_user_following',
  ],
  [
    'getUserFollowersApiV1InstagramV3GetUserFollowersGet',
    '/api/v1/instagram/v3/get_user_followers',
  ],
  ['getLocationInfoApiV1InstagramV3GetLocationInfoGet', '/api/v1/instagram/v3/get_location_info'],
  [
    'getLocationPostsApiV1InstagramV3GetLocationPostsGet',
    '/api/v1/instagram/v3/get_location_posts',
  ],
  ['getVideoInfoApiV1YoutubeWebGetVideoInfoGet', '/api/v1/youtube/web/get_video_info'],
  ['getVideoInfoV2ApiV1YoutubeWebGetVideoInfoV2Get', '/api/v1/youtube/web/get_video_info_v2'],
  ['getVideoInfoV3ApiV1YoutubeWebGetVideoInfoV3Get', '/api/v1/youtube/web/get_video_info_v3'],
  [
    'apiGetVideoSubtitlesApiV1YoutubeWebGetVideoSubtitlesGet',
    '/api/v1/youtube/web/get_video_subtitles',
  ],
  ['getVideoCommentsApiV1YoutubeWebGetVideoCommentsGet', '/api/v1/youtube/web/get_video_comments'],
  [
    'getVideoCommentRepliesApiV1YoutubeWebGetVideoCommentRepliesGet',
    '/api/v1/youtube/web/get_video_comment_replies',
  ],
  [
    'getChannelDescriptionApiV1YoutubeWebGetChannelDescriptionGet',
    '/api/v1/youtube/web/get_channel_description',
  ],
  ['getRelateVideoApiV1YoutubeWebGetRelateVideoGet', '/api/v1/youtube/web/get_relate_video'],
  ['searchVideoApiV1YoutubeWebSearchVideoGet', '/api/v1/youtube/web/search_video'],
  ['getGeneralSearchApiV1YoutubeWebGetGeneralSearchGet', '/api/v1/youtube/web/get_general_search'],
  ['getShortsSearchApiV1YoutubeWebGetShortsSearchGet', '/api/v1/youtube/web/get_shorts_search'],
  ['getChannelIdApiV1YoutubeWebGetChannelIdGet', '/api/v1/youtube/web/get_channel_id'],
  ['getChannelIdV2ApiV1YoutubeWebGetChannelIdV2Get', '/api/v1/youtube/web/get_channel_id_v2'],
  ['getChannelUrlApiV1YoutubeWebGetChannelUrlGet', '/api/v1/youtube/web/get_channel_url'],
  ['getChannelInfoApiV1YoutubeWebGetChannelInfoGet', '/api/v1/youtube/web/get_channel_info'],
  ['getChannelVideosApiV1YoutubeWebGetChannelVideosGet', '/api/v1/youtube/web/get_channel_videos'],
  [
    'getChannelVideosV2ApiV1YoutubeWebGetChannelVideosV2Get',
    '/api/v1/youtube/web/get_channel_videos_v2',
  ],
  [
    'getChannelVideosV3ApiV1YoutubeWebGetChannelVideosV3Get',
    '/api/v1/youtube/web/get_channel_videos_v3',
  ],
  [
    'getChannelShortVideosApiV1YoutubeWebGetChannelShortVideosGet',
    '/api/v1/youtube/web/get_channel_short_videos',
  ],
  ['searchChannelApiV1YoutubeWebSearchChannelGet', '/api/v1/youtube/web/search_channel'],
  [
    'getTrendingVideosApiV1YoutubeWebGetTrendingVideosGet',
    '/api/v1/youtube/web/get_trending_videos',
  ],
  ['getVideoInfoApiV1YoutubeWebV2GetVideoInfoGet', '/api/v1/youtube/web_v2/get_video_info'],
  [
    'getVideoCommentsApiV1YoutubeWebV2GetVideoCommentsGet',
    '/api/v1/youtube/web_v2/get_video_comments',
  ],
  [
    'getVideoCommentRepliesApiV1YoutubeWebV2GetVideoCommentRepliesGet',
    '/api/v1/youtube/web_v2/get_video_comment_replies',
  ],
  [
    'getChannelDescriptionApiV1YoutubeWebV2GetChannelDescriptionGet',
    '/api/v1/youtube/web_v2/get_channel_description',
  ],
  [
    'getGeneralSearchApiV1YoutubeWebV2GetGeneralSearchGet',
    '/api/v1/youtube/web_v2/get_general_search',
  ],
  [
    'getShortsSearchApiV1YoutubeWebV2GetShortsSearchGet',
    '/api/v1/youtube/web_v2/get_shorts_search',
  ],
  ['getChannelIdApiV1YoutubeWebV2GetChannelIdGet', '/api/v1/youtube/web_v2/get_channel_id'],
  ['getChannelUrlApiV1YoutubeWebV2GetChannelUrlGet', '/api/v1/youtube/web_v2/get_channel_url'],
  [
    'getChannelVideosApiV1YoutubeWebV2GetChannelVideosGet',
    '/api/v1/youtube/web_v2/get_channel_videos',
  ],
  [
    'getVideoStreamsApiV1YoutubeWebV2GetVideoStreamsGet',
    '/api/v1/youtube/web_v2/get_video_streams',
  ],
  [
    'getVideoStreamsV2ApiV1YoutubeWebV2GetVideoStreamsV2Get',
    '/api/v1/youtube/web_v2/get_video_streams_v2',
  ],
  [
    'getSignedStreamUrlApiV1YoutubeWebV2GetSignedStreamUrlGet',
    '/api/v1/youtube/web_v2/get_signed_stream_url',
  ],
  [
    'getRelatedVideosApiV1YoutubeWebV2GetRelatedVideosGet',
    '/api/v1/youtube/web_v2/get_related_videos',
  ],
  [
    'getChannelShortsApiV1YoutubeWebV2GetChannelShortsGet',
    '/api/v1/youtube/web_v2/get_channel_shorts',
  ],
  [
    'getSearchSuggestionsApiV1YoutubeWebV2GetSearchSuggestionsGet',
    '/api/v1/youtube/web_v2/get_search_suggestions',
  ],
  ['searchChannelsApiV1YoutubeWebV2SearchChannelsGet', '/api/v1/youtube/web_v2/search_channels'],
  ['getUserProfileApiV1LinkedinWebGetUserProfileGet', '/api/v1/linkedin/web/get_user_profile'],
  ['getUserPostsApiV1LinkedinWebGetUserPostsGet', '/api/v1/linkedin/web/get_user_posts'],
  ['getUserCommentsApiV1LinkedinWebGetUserCommentsGet', '/api/v1/linkedin/web/get_user_comments'],
  ['getUserContactApiV1LinkedinWebGetUserContactGet', '/api/v1/linkedin/web/get_user_contact'],
  [
    'getUserRecommendationsApiV1LinkedinWebGetUserRecommendationsGet',
    '/api/v1/linkedin/web/get_user_recommendations',
  ],
  ['getUserVideosApiV1LinkedinWebGetUserVideosGet', '/api/v1/linkedin/web/get_user_videos'],
  ['getUserImagesApiV1LinkedinWebGetUserImagesGet', '/api/v1/linkedin/web/get_user_images'],
  [
    'getCompanyProfileApiV1LinkedinWebGetCompanyProfileGet',
    '/api/v1/linkedin/web/get_company_profile',
  ],
  [
    'getCompanyPeopleApiV1LinkedinWebGetCompanyPeopleGet',
    '/api/v1/linkedin/web/get_company_people',
  ],
  ['getCompanyPostsApiV1LinkedinWebGetCompanyPostsGet', '/api/v1/linkedin/web/get_company_posts'],
  ['getCompanyJobsApiV1LinkedinWebGetCompanyJobsGet', '/api/v1/linkedin/web/get_company_jobs'],
  [
    'getCompanyJobCountApiV1LinkedinWebGetCompanyJobCountGet',
    '/api/v1/linkedin/web/get_company_job_count',
  ],
  ['getUserAboutApiV1LinkedinWebGetUserAboutGet', '/api/v1/linkedin/web/get_user_about'],
  [
    'getUserFollowerAndConnectionApiV1LinkedinWebGetUserFollowerAndConnectionGet',
    '/api/v1/linkedin/web/get_user_follower_and_connection',
  ],
  [
    'getUserExperienceApiV1LinkedinWebGetUserExperienceGet',
    '/api/v1/linkedin/web/get_user_experience',
  ],
  ['getUserSkillsApiV1LinkedinWebGetUserSkillsGet', '/api/v1/linkedin/web/get_user_skills'],
  [
    'getUserEducationsApiV1LinkedinWebGetUserEducationsGet',
    '/api/v1/linkedin/web/get_user_educations',
  ],
  [
    'getUserPublicationsApiV1LinkedinWebGetUserPublicationsGet',
    '/api/v1/linkedin/web/get_user_publications',
  ],
  [
    'getUserCertificationsApiV1LinkedinWebGetUserCertificationsGet',
    '/api/v1/linkedin/web/get_user_certifications',
  ],
  ['getUserHonorsApiV1LinkedinWebGetUserHonorsGet', '/api/v1/linkedin/web/get_user_honors'],
  [
    'getUserInterestsGroupsApiV1LinkedinWebGetUserInterestsGroupsGet',
    '/api/v1/linkedin/web/get_user_interests_groups',
  ],
  [
    'getUserInterestsCompaniesApiV1LinkedinWebGetUserInterestsCompaniesGet',
    '/api/v1/linkedin/web/get_user_interests_companies',
  ],
  ['getJobDetailApiV1LinkedinWebGetJobDetailGet', '/api/v1/linkedin/web/get_job_detail'],
  ['searchJobsApiV1LinkedinWebSearchJobsGet', '/api/v1/linkedin/web/search_jobs'],
  ['searchPeopleApiV1LinkedinWebSearchPeopleGet', '/api/v1/linkedin/web/search_people'],
  ['fetchOneVideoApiV1BilibiliWebFetchOneVideoGet', '/api/v1/bilibili/web/fetch_one_video'],
  ['fetchOneVideoV2ApiV1BilibiliWebFetchOneVideoV2Get', '/api/v1/bilibili/web/fetch_one_video_v2'],
  ['fetchOneVideoV3ApiV1BilibiliWebFetchOneVideoV3Get', '/api/v1/bilibili/web/fetch_one_video_v3'],
  [
    'fetchVideoDetailApiV1BilibiliWebFetchVideoDetailGet',
    '/api/v1/bilibili/web/fetch_video_detail',
  ],
  [
    'fetchVideoPlayInfoApiV1BilibiliWebFetchVideoPlayInfoGet',
    '/api/v1/bilibili/web/fetch_video_play_info',
  ],
  [
    'fetchVideoSubtitleApiV1BilibiliWebFetchVideoSubtitleGet',
    '/api/v1/bilibili/web/fetch_video_subtitle',
  ],
  ['fetchHotSearchApiV1BilibiliWebFetchHotSearchGet', '/api/v1/bilibili/web/fetch_hot_search'],
  [
    'fetchGeneralSearchApiV1BilibiliWebFetchGeneralSearchGet',
    '/api/v1/bilibili/web/fetch_general_search',
  ],
  ['fetchOneVideoApiV1BilibiliWebFetchVideoPlayurlGet', '/api/v1/bilibili/web/fetch_video_playurl'],
  [
    'fetchVipVideoPlayurlApiV1BilibiliWebFetchVipVideoPlayurlPost',
    '/api/v1/bilibili/web/fetch_vip_video_playurl',
  ],
  [
    'fetchUserPostVideosApiV1BilibiliWebFetchUserPostVideosGet',
    '/api/v1/bilibili/web/fetch_user_post_videos',
  ],
  [
    'fetchCollectFoldersApiV1BilibiliWebFetchCollectFoldersGet',
    '/api/v1/bilibili/web/fetch_collect_folders',
  ],
  [
    'fetchUserCollectionVideosApiV1BilibiliWebFetchUserCollectionVideosGet',
    '/api/v1/bilibili/web/fetch_user_collection_videos',
  ],
  [
    'fetchCollectFoldersApiV1BilibiliWebFetchUserProfileGet',
    '/api/v1/bilibili/web/fetch_user_profile',
  ],
  ['fetchUserUpStatApiV1BilibiliWebFetchUserUpStatGet', '/api/v1/bilibili/web/fetch_user_up_stat'],
  [
    'fetchUserRelationStatApiV1BilibiliWebFetchUserRelationStatGet',
    '/api/v1/bilibili/web/fetch_user_relation_stat',
  ],
  [
    'fetchCollectFoldersApiV1BilibiliWebFetchComPopularGet',
    '/api/v1/bilibili/web/fetch_com_popular',
  ],
  [
    'fetchCollectFoldersApiV1BilibiliWebFetchVideoCommentsGet',
    '/api/v1/bilibili/web/fetch_video_comments',
  ],
  [
    'fetchCollectFoldersApiV1BilibiliWebFetchCommentReplyGet',
    '/api/v1/bilibili/web/fetch_comment_reply',
  ],
  [
    'fetchCollectFoldersApiV1BilibiliWebFetchUserDynamicGet',
    '/api/v1/bilibili/web/fetch_user_dynamic',
  ],
  [
    'fetchDynamicDetailApiV1BilibiliWebFetchDynamicDetailGet',
    '/api/v1/bilibili/web/fetch_dynamic_detail',
  ],
  [
    'fetchDynamicDetailV2ApiV1BilibiliWebFetchDynamicDetailV2Get',
    '/api/v1/bilibili/web/fetch_dynamic_detail_v2',
  ],
  ['fetchOneVideoApiV1BilibiliWebFetchVideoDanmakuGet', '/api/v1/bilibili/web/fetch_video_danmaku'],
  [
    'fetchCollectFoldersApiV1BilibiliWebFetchLiveRoomDetailGet',
    '/api/v1/bilibili/web/fetch_live_room_detail',
  ],
  [
    'fetchCollectFoldersApiV1BilibiliWebFetchLiveVideosGet',
    '/api/v1/bilibili/web/fetch_live_videos',
  ],
  [
    'fetchCollectFoldersApiV1BilibiliWebFetchLiveStreamersGet',
    '/api/v1/bilibili/web/fetch_live_streamers',
  ],
  [
    'fetchCollectFoldersApiV1BilibiliWebFetchAllLiveAreasGet',
    '/api/v1/bilibili/web/fetch_all_live_areas',
  ],
  ['fetchOneVideoApiV1BilibiliWebBvToAidGet', '/api/v1/bilibili/web/bv_to_aid'],
  ['fetchOneVideoApiV1BilibiliWebFetchVideoPartsGet', '/api/v1/bilibili/web/fetch_video_parts'],
  ['fetchGetUserIdApiV1BilibiliWebFetchGetUserIdGet', '/api/v1/bilibili/web/fetch_get_user_id'],
  ['fetchOneVideoApiV1BilibiliAppFetchOneVideoGet', '/api/v1/bilibili/app/fetch_one_video'],
  [
    'fetchVideoCommentsApiV1BilibiliAppFetchVideoCommentsGet',
    '/api/v1/bilibili/app/fetch_video_comments',
  ],
  [
    'fetchReplyDetailApiV1BilibiliAppFetchReplyDetailGet',
    '/api/v1/bilibili/app/fetch_reply_detail',
  ],
  ['fetchUserVideosApiV1BilibiliAppFetchUserVideosGet', '/api/v1/bilibili/app/fetch_user_videos'],
  ['fetchUserInfoApiV1BilibiliAppFetchUserInfoGet', '/api/v1/bilibili/app/fetch_user_info'],
  ['fetchHomeFeedApiV1BilibiliAppFetchHomeFeedGet', '/api/v1/bilibili/app/fetch_home_feed'],
  [
    'fetchPopularFeedApiV1BilibiliAppFetchPopularFeedGet',
    '/api/v1/bilibili/app/fetch_popular_feed',
  ],
  ['fetchSearchAllApiV1BilibiliAppFetchSearchAllGet', '/api/v1/bilibili/app/fetch_search_all'],
  [
    'fetchSearchByTypeApiV1BilibiliAppFetchSearchByTypeGet',
    '/api/v1/bilibili/app/fetch_search_by_type',
  ],
  ['fetchCinemaTabApiV1BilibiliAppFetchCinemaTabGet', '/api/v1/bilibili/app/fetch_cinema_tab'],
  ['fetchBangumiTabApiV1BilibiliAppFetchBangumiTabGet', '/api/v1/bilibili/app/fetch_bangumi_tab'],
  ['getPostDetailApiV1Sora2GetPostDetailGet', '/api/v1/sora2/get_post_detail'],
  ['getPostRemixListApiV1Sora2GetPostRemixListGet', '/api/v1/sora2/get_post_remix_list'],
  [
    'getVideoDownloadInfoApiV1Sora2GetVideoDownloadInfoGet',
    '/api/v1/sora2/get_video_download_info',
  ],
  ['getPostCommentsApiV1Sora2GetPostCommentsGet', '/api/v1/sora2/get_post_comments'],
  ['getCommentRepliesApiV1Sora2GetCommentRepliesGet', '/api/v1/sora2/get_comment_replies'],
  ['getUserProfileApiV1Sora2GetUserProfileGet', '/api/v1/sora2/get_user_profile'],
  ['getUserPostsApiV1Sora2GetUserPostsGet', '/api/v1/sora2/get_user_posts'],
  ['getCameoLeaderboardApiV1Sora2GetCameoLeaderboardGet', '/api/v1/sora2/get_cameo_leaderboard'],
  [
    'getUserCameoAppearancesApiV1Sora2GetUserCameoAppearancesGet',
    '/api/v1/sora2/get_user_cameo_appearances',
  ],
  ['getUserFollowersApiV1Sora2GetUserFollowersGet', '/api/v1/sora2/get_user_followers'],
  ['getUserFollowingApiV1Sora2GetUserFollowingGet', '/api/v1/sora2/get_user_following'],
  ['getFeedApiV1Sora2GetFeedGet', '/api/v1/sora2/get_feed'],
  ['searchUsersApiV1Sora2SearchUsersGet', '/api/v1/sora2/search_users'],
  ['uploadImageApiV1Sora2UploadImagePost', '/api/v1/sora2/upload_image'],
  ['createVideoApiV1Sora2CreateVideoPost', '/api/v1/sora2/create_video'],
  ['getTaskStatusApiV1Sora2GetTaskStatusGet', '/api/v1/sora2/get_task_status'],
  ['getTaskDetailApiV1Sora2GetTaskDetailGet', '/api/v1/sora2/get_task_detail'],
  [
    'getTempEmailApiV1TempMailV1GetTempEmailAddressGet',
    '/api/v1/temp_mail/v1/get_temp_email_address',
  ],
  ['getEmailsApiV1TempMailV1GetEmailsInboxGet', '/api/v1/temp_mail/v1/get_emails_inbox'],
  ['getEmailByIdApiV1TempMailV1GetEmailByIdGet', '/api/v1/temp_mail/v1/get_email_by_id'],
  ['fetchTweetDetailApiV1TwitterWebFetchTweetDetailGet', '/api/v1/twitter/web/fetch_tweet_detail'],
  ['fetchUserProfileApiV1TwitterWebFetchUserProfileGet', '/api/v1/twitter/web/fetch_user_profile'],
  [
    'fetchUserPostTweetApiV1TwitterWebFetchUserPostTweetGet',
    '/api/v1/twitter/web/fetch_user_post_tweet',
  ],
  [
    'fetchSearchTimelineApiV1TwitterWebFetchSearchTimelineGet',
    '/api/v1/twitter/web/fetch_search_timeline',
  ],
  [
    'fetchPostCommentsApiV1TwitterWebFetchPostCommentsGet',
    '/api/v1/twitter/web/fetch_post_comments',
  ],
  [
    'fetchLatestPostCommentsApiV1TwitterWebFetchLatestPostCommentsGet',
    '/api/v1/twitter/web/fetch_latest_post_comments',
  ],
  [
    'fetchUserTweetRepliesApiV1TwitterWebFetchUserTweetRepliesGet',
    '/api/v1/twitter/web/fetch_user_tweet_replies',
  ],
  [
    'fetchUserHighlightsTweetsApiV1TwitterWebFetchUserHighlightsTweetsGet',
    '/api/v1/twitter/web/fetch_user_highlights_tweets',
  ],
  ['fetchUserMediaApiV1TwitterWebFetchUserMediaGet', '/api/v1/twitter/web/fetch_user_media'],
  [
    'fetchRetweetUserListApiV1TwitterWebFetchRetweetUserListGet',
    '/api/v1/twitter/web/fetch_retweet_user_list',
  ],
  ['fetchTrendingApiV1TwitterWebFetchTrendingGet', '/api/v1/twitter/web/fetch_trending'],
  [
    'fetchUserFollowingsApiV1TwitterWebFetchUserFollowingsGet',
    '/api/v1/twitter/web/fetch_user_followings',
  ],
  [
    'fetchUserFollowersApiV1TwitterWebFetchUserFollowersGet',
    '/api/v1/twitter/web/fetch_user_followers',
  ],
  ['fetchUserInfoApiV1ThreadsWebFetchUserInfoGet', '/api/v1/threads/web/fetch_user_info'],
  [
    'fetchUserInfoByIdApiV1ThreadsWebFetchUserInfoByIdGet',
    '/api/v1/threads/web/fetch_user_info_by_id',
  ],
  ['fetchUserPostsApiV1ThreadsWebFetchUserPostsGet', '/api/v1/threads/web/fetch_user_posts'],
  ['fetchUserRepostsApiV1ThreadsWebFetchUserRepostsGet', '/api/v1/threads/web/fetch_user_reposts'],
  ['fetchUserRepliesApiV1ThreadsWebFetchUserRepliesGet', '/api/v1/threads/web/fetch_user_replies'],
  ['fetchPostDetailApiV1ThreadsWebFetchPostDetailGet', '/api/v1/threads/web/fetch_post_detail'],
  [
    'fetchPostDetailV2ApiV1ThreadsWebFetchPostDetailV2Get',
    '/api/v1/threads/web/fetch_post_detail_v2',
  ],
  [
    'fetchPostCommentsApiV1ThreadsWebFetchPostCommentsGet',
    '/api/v1/threads/web/fetch_post_comments',
  ],
  ['searchTopApiV1ThreadsWebSearchTopGet', '/api/v1/threads/web/search_top'],
  ['searchRecentApiV1ThreadsWebSearchRecentGet', '/api/v1/threads/web/search_recent'],
  ['searchProfilesApiV1ThreadsWebSearchProfilesGet', '/api/v1/threads/web/search_profiles'],
  ['fetchHomeFeedApiV1RedditAppFetchHomeFeedGet', '/api/v1/reddit/app/fetch_home_feed'],
  ['fetchPopularFeedApiV1RedditAppFetchPopularFeedGet', '/api/v1/reddit/app/fetch_popular_feed'],
  ['fetchGamesFeedApiV1RedditAppFetchGamesFeedGet', '/api/v1/reddit/app/fetch_games_feed'],
  ['fetchNewsFeedApiV1RedditAppFetchNewsFeedGet', '/api/v1/reddit/app/fetch_news_feed'],
  ['fetchPostDetailsApiV1RedditAppFetchPostDetailsGet', '/api/v1/reddit/app/fetch_post_details'],
  [
    'fetchPostDetailsBatchApiV1RedditAppFetchPostDetailsBatchGet',
    '/api/v1/reddit/app/fetch_post_details_batch',
  ],
  [
    'fetchPostDetailsBatchLargeApiV1RedditAppFetchPostDetailsBatchLargeGet',
    '/api/v1/reddit/app/fetch_post_details_batch_large',
  ],
  ['fetchPostCommentsApiV1RedditAppFetchPostCommentsGet', '/api/v1/reddit/app/fetch_post_comments'],
  [
    'fetchCommentRepliesApiV1RedditAppFetchCommentRepliesGet',
    '/api/v1/reddit/app/fetch_comment_replies',
  ],
  [
    'fetchSubredditStyleApiV1RedditAppFetchSubredditStyleGet',
    '/api/v1/reddit/app/fetch_subreddit_style',
  ],
  [
    'fetchSubredditPostChannelsApiV1RedditAppFetchSubredditPostChannelsGet',
    '/api/v1/reddit/app/fetch_subreddit_post_channels',
  ],
  [
    'fetchSubredditInfoApiV1RedditAppFetchSubredditInfoGet',
    '/api/v1/reddit/app/fetch_subreddit_info',
  ],
  [
    'fetchSubredditSettingsApiV1RedditAppFetchSubredditSettingsGet',
    '/api/v1/reddit/app/fetch_subreddit_settings',
  ],
  [
    'fetchSearchTypeaheadApiV1RedditAppFetchSearchTypeaheadGet',
    '/api/v1/reddit/app/fetch_search_typeahead',
  ],
  [
    'fetchDynamicSearchApiV1RedditAppFetchDynamicSearchGet',
    '/api/v1/reddit/app/fetch_dynamic_search',
  ],
  [
    'fetchCommunityHighlightsApiV1RedditAppFetchCommunityHighlightsGet',
    '/api/v1/reddit/app/fetch_community_highlights',
  ],
  [
    'fetchTrendingSearchesApiV1RedditAppFetchTrendingSearchesGet',
    '/api/v1/reddit/app/fetch_trending_searches',
  ],
  ['fetchUserProfileApiV1RedditAppFetchUserProfileGet', '/api/v1/reddit/app/fetch_user_profile'],
  [
    'fetchUserActiveSubredditsApiV1RedditAppFetchUserActiveSubredditsGet',
    '/api/v1/reddit/app/fetch_user_active_subreddits',
  ],
  ['fetchUserCommentsApiV1RedditAppFetchUserCommentsGet', '/api/v1/reddit/app/fetch_user_comments'],
  ['fetchUserPostsApiV1RedditAppFetchUserPostsGet', '/api/v1/reddit/app/fetch_user_posts'],
  [
    'fetchSubredditFeedApiV1RedditAppFetchSubredditFeedGet',
    '/api/v1/reddit/app/fetch_subreddit_feed',
  ],
  [
    'checkSubredditMutedApiV1RedditAppCheckSubredditMutedGet',
    '/api/v1/reddit/app/check_subreddit_muted',
  ],
  ['fetchUserTrophiesApiV1RedditAppFetchUserTrophiesGet', '/api/v1/reddit/app/fetch_user_trophies'],
  ['hybridParsingSingleVideoApiV1HybridVideoDataGet', '/api/v1/hybrid/video_data'],
  ['getShortcutApiV1IosShortcutShortcutGet', '/api/v1/ios_shortcut/shortcut'],
  ['viewCacheStatusApiV1DemoDemoCacheStatusGet', '/api/v1/demo/demo/cache_status'],
  [
    'douyinWebFetchoneVideoDemoApiV1DemoDouyinWebFetchOneVideoGet',
    '/api/v1/demo/douyin/web/fetch_one_video',
  ],
  [
    'douyinAppFetchOneVideoApiV1DemoDouyinAppFetchOneVideoGet',
    '/api/v1/demo/douyin/app/fetch_one_video',
  ],
  [
    'douyinSearchGeneralDemoApiV1DemoDouyinSearchAppGeneralSearchGet',
    '/api/v1/demo/douyin_search/app/general_search',
  ],
  [
    'kuaishouWebFetchOneVideoApiV1DemoKuaishouWebFetchOneVideoGet',
    '/api/v1/demo/kuaishou/web/fetch_one_video',
  ],
  [
    'tiktokWebFetchUserProfileApiV1DemoTiktokWebFetchUserProfileGet',
    '/api/v1/demo/tiktok/web/fetch_user_profile',
  ],
  [
    'tiktokAppFetchOneVideoApiV1DemoTiktokAppFetchOneVideoGet',
    '/api/v1/demo/tiktok/app/fetch_one_video',
  ],
  [
    'instagramWebFetchUserInfoApiV1DemoInstagramWebFetchUserInfoGet',
    '/api/v1/demo/instagram/web/fetch_user_info',
  ],
  ['wechatArticleExtractApiV1DemoWechatArticleExtractGet', '/api/v1/demo/wechat/article_extract'],
  ['getFdbHubGetFacebookPageId', '/fdb-hub/get_facebook_page_id'],
  ['getFdbHubGetFacebookPagesDetailsFromLink', '/fdb-hub/get_facebook_pages_details_from_link'],
  [
    'getFdbHubGetFacebookPagePostsDetailsFromId',
    '/fdb-hub/get_facebook_page_posts_details_from_id',
  ],
  ['getFdbHubGetFacebookPageVideosDetails', '/fdb-hub/get_facebook_page_videos_details'],
  ['getFdbHubGetFacebookReelsDetails', '/fdb-hub/get_facebook_reels_details'],
  ['getFdbHubGetFacebookGroupId', '/fdb-hub/get_facebook_group_id'],
  ['getFdbHubGetFacebookGroupMetadataDetails', '/fdb-hub/get_facebook_group_metadata_details'],
  ['getFdbHubGetFacebookGroupDetailsFromId', '/fdb-hub/get_facebook_group_details_from_id'],
  [
    'getFdbHubGetFacebookGroupPostsDetailsFromId',
    '/fdb-hub/get_facebook_group_posts_details_from_id',
  ],
  [
    'getFdbHubGetFacebookGroupVideosDetailsFromId',
    '/fdb-hub/get_facebook_group_videos_details_from_id',
  ],
  ['getFdbHubGetFacebookPostId', '/fdb-hub/get_facebook_post_id'],
  ['getFdbHubGetFacebookPostDetails', '/fdb-hub/get_facebook_post_details'],
  ['getFdbHubGetFacebookPostCommentsDetails', '/fdb-hub/get_facebook_post_comments_details'],
  ['getFdbHubGetFacebookPostAttachementDetails', '/fdb-hub/get_facebook_post_attachement_details'],
  ['getFdbHubGetFacebookVideoPostDetails', '/fdb-hub/get_facebook_video_post_details'],
  ['getFdbHubSearchFacebookWatchVideos', '/fdb-hub/search_facebook_watch_videos'],
  ['getFdbHubFetchSearchPosts', '/fdb-hub/fetch_search_posts'],
  ['getFdbHubFetchSearchPeople', '/fdb-hub/fetch_search_people'],
  ['getFdbHubFetchSearchPages', '/fdb-hub/fetch_search_pages'],
])
