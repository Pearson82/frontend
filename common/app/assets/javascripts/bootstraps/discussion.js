define([
    'common/utils/mediator',
    'common/modules/discussion/comments'
],
function(
    mediator,
    Comments
) {

function init(config, context) {
    var comments = new Comments(context, mediator, {
        discussionId: document.getElementById('comments').getAttribute('data-discussion-key')
    });

    comments.attachTo(document.querySelector('.d-discussion'));
}

return { init: init };

}); //define