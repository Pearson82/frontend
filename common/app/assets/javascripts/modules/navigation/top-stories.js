define([
    'common/common',
    'common/utils/ajax',
    'bonzo',
    'common/modules/lazyload',
    'common/utils/config'
], function (
    common,
    ajax,
    bonzo,
    LazyLoad,
    config
) {

    function TopStories() {

        var self = this;

        this.load = function (config, context) {

            var url = '/top-stories/trails.json?page-size=10&view=link&_edition=' + config.page.edition,
                container = context.querySelector('.nav-popup-topstories');

            if(container) {
                if (config.pathPrefix) {
                    url = config.pathPrefix + url;
                }
                new LazyLoad({
                    url: url,
                    container: container,
                    beforeInsert: function (html) {
                        return '' +
                            '<h3 class="headline-list__title">Top stories</h3>' +
                            '<div class="headline-list box-indent" data-link-name="top-stories">' +
                                html +
                            '</div>';
                    },
                    success: function () {
                        common.mediator.emit('modules:topstories:loaded');
                    },
                    error: function(req) {
                        common.mediator.emit('module:error', 'Failed to load top stories: ' + req.statusText, 'common/modules/top-stories.js');
                    }
                }).load();

            }
        };

    }

    return TopStories;

});
