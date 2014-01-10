define([
    'common/utils/mediator',
    'common/modules/discussion/comments'
],
function(
    mediator,
    Comments
) {

function init(config, context) {
    var commentsElem = document.getElementById('comments'),
        comments = new Comments(context, mediator, {
            discussionId: commentsElem.getAttribute('data-discussion-key')
        });

    comments.attachTo(document.querySelector('.d-discussion'));
}

return { init: init };

}); //define