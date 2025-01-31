$(document).ready(function () {

    setTimeout(function () {
        $('#initTyping').remove();
        $('#msg1').removeClass('hidden').after(typingEffect());
        setTimeout(function () {
            $('.temp-typing').remove();
            $('#msg2').removeClass('hidden').after(typingEffect());
            setTimeout(function () {
                $('.temp-typing').remove();
                $('#msg3').removeClass('hidden').after(typingEffect());
                setTimeout(function () {
                    $('.temp-typing').remove();
                    $('#msg4').removeClass('hidden');
                }, 0);
            }, 1750);
        }, 1250);
    }, 750);

    var buttonValue;
    var currentStep;

    $('button.chat-button').on('click', function () {

        currentStep = $(this).attr('data-form-step');
        buttonValue = $(this).attr('data-form-value');

        if (currentStep == 1) {
            if (buttonValue == 'Yes') {
                scrollToBottom();
                updateURL('car', 'yes')
                $('#agentBlock2 .agent-chat').prepend(typingEffect());
                $('#msg4').addClass('hidden');
                $('#userBlock1').removeClass('hidden');
                $('#msg5no').addClass('hidden');

                $('#userBlock1').removeClass('hidden');
                scrollToBottom();
                setTimeout(function () {
                    $('#agentBlock2').removeClass('hidden');
                    scrollToBottom();
                    setTimeout(function () {
                        scrollToBottom();
                        setTimeout(function () {
                            $('.temp-typing').remove();
                            $('#msg7').removeClass('hidden').after(typingEffect());
                            scrollToBottom();
                            setTimeout(function () {
                                $('.temp-typing').remove();
                                $('#msg8').removeClass('hidden');
                                scrollToBottom();
                            }, 0);
                        }, 1750);
                    }, 0);
                }, 50);
            }
            else if (buttonValue == 'No') {
                updateURL('car', 'no')
                $('#msg4').addClass('hidden');
                $('#msg5no').addClass('hidden');
                currentStep = 3;
            }
        }

        if (currentStep == 2) {
            $('#msg8').addClass('hidden');
            $('#userBlock2').removeClass('hidden');

            if (buttonValue == '1') {
                $('#msg9one').removeClass('hidden');
                $('#hdnApprovalStatus').val('1');
                updateURL('insured', '3');
            }
            else if (buttonValue == '2') {
                $('#msg9two').removeClass('hidden');
                $('#hdnApprovalStatus').val('2');
                updateURL('insured', '2');
            }
            else if (buttonValue == '3') {
                $('#msg9three').removeClass('hidden');
                $('#hdnApprovalStatus').val('3');
                updateURL('insured', '2');
            }

            scrollToBottom();
            setTimeout(function () {
                $('#agentBlock456').removeClass('hidden');
                scrollToBottom();
                setTimeout(function () {
                    $('.temp-typing').remove();
                    $('#msg456').removeClass('hidden').after(typingEffect());
                    scrollToBottom();
                    setTimeout(function () {
                        $('.temp-typing').remove();
                        $('#msg457').removeClass('hidden');
                        scrollToBottom();
                    }, 0);
                }, 1750);
            }, 50);
        }

        if (currentStep == 456) {
            $('#msg457').addClass('hidden');
            $('#userBlock456').removeClass('hidden');

            $('#agentBlock4 .agent-chat .agent-chat-2 #agentBlock5').prepend(typingEffect());
            if (buttonValue == 'Yes') {
                $('#msg458yes').removeClass('hidden');
                updateURL('homeowner', 'yes')
            } else {
                $('#msg458no').removeClass('hidden');
                updateURL('homeowner', 'no')
            }

            // Continue to Block3
            scrollToBottom();

            $('#agentBlock4 .agent-chat .agent-chat-2 #agentBlock5').prepend(typingEffect());
                setTimeout(function () {
                    $('#agentBlock4').removeClass('hidden');
                    scrollToBottom();
                    setTimeout(function () {
                        $('.temp-typing').remove();
                        $('#msg13').removeClass('hidden').after(typingEffect());
                        scrollToBottom();
                        setTimeout(function () {
                            $('.temp-typing').remove();
                            $('#msg14').removeClass('hidden').after(typingEffect());
                            scrollToBottom();
                            setTimeout(function () {
                                scrollToBottom();
                                setTimeout(function () {
                                    $('.temp-typing').remove();
                                    $('#msg16').removeClass('hidden').after(typingEffect());
                                    scrollToBottom();
                                    setTimeout(function () {
                                        $('.temp-typing').remove();
                                        $('#msg17').removeClass('hidden');
                                        scrollToBottom();
                                    }, 0);
                                }, 2250);
                            }, 0);
                        }, 1750);
                    }, 1250);
                }, 250);

            if ($('#hdnApprovalStatus').val() == 'no') {
                $('#DownsellNumber').removeClass('hidden');
                $('#DownsellNumber1').removeClass('hidden');
                $('#msg14disapproved').removeClass('hidden');
                $('#msg16disapproved').removeClass('hidden');
                $('#msg21disapproved').removeClass('hidden');
                $('#msg23disapproved').removeClass('hidden');
            } else {
                $('#PrimaryNumber').removeClass('hidden');
                $('#PrimaryNumber1').removeClass('hidden');
                $('#msg14approved').removeClass('hidden');
                $('#msg16approved').removeClass('hidden');
                $('#msg21approved').removeClass('hidden');
                $('#msg23approved').removeClass('hidden');
            }
            scrollToBottom();

            
            
        }

        if (currentStep == 3) {
            $('#agentBlock4 .agent-chat .agent-chat-2 #agentBlock5').prepend(typingEffect());
            $('#msg11').addClass('hidden');
            $('#userBlock3').removeClass('hidden');

            if (buttonValue == 'Yes') {
                $('#msg12yes').removeClass('hidden');
                setTimeout(function () {
                    $('#agentBlock4').removeClass('hidden');
                    scrollToBottom();
                    setTimeout(function () {
                        $('.temp-typing').remove();
                        $('#msg13').removeClass('hidden').after(typingEffect());
                        scrollToBottom();
                        setTimeout(function () {
                            $('.temp-typing').remove();
                            $('#msg14').removeClass('hidden').after(typingEffect());
                            scrollToBottom();
                            setTimeout(function () {
                                scrollToBottom();
                                setTimeout(function () {
                                    $('.temp-typing').remove();
                                    $('#msg16').removeClass('hidden').after(typingEffect());
                                    scrollToBottom();
                                    setTimeout(function () {
                                        $('.temp-typing').remove();
                                        $('#msg17').removeClass('hidden');
                                        scrollToBottom();
                                    }, 0);
                                }, 2250);
                            }, 0);
                        }, 1750);
                    }, 1250);
                }, 250);
            } else if (buttonValue == 'No') {
                $('#msg12no').removeClass('hidden');
                setTimeout(function () {
                    $('#agentBlock5').removeClass('hidden');
                    scrollToBottom();
                    setTimeout(function () {
                        $('.temp-typing').remove();
                        $('#msg25').removeClass('hidden').after(typingEffect());
                        scrollToBottom();
                        setTimeout(function () {
                            $('.temp-typing').remove();
                            $('#msg26').removeClass('hidden');
                            scrollToBottom();
                            setTimeout(function () {
                                $('.temp-typing').remove();
                                $('#msg27').removeClass('hidden');
                                $('#disconnected').removeClass('hidden');
                                scrollToBottom();
                                setTimeout(function () {
                                    window.location.href = "https://www.getaffordableinsurance.com/?oid=1&affid=3";
                                    scrollToBottom();
                                }, 5000);
                            }, 1750);
                        }, 1750);
                    }, 1750);
                }, 250);
            }

            if ($('#hdnApprovalStatus').val() == 'no') {
                $('#DownsellNumber').removeClass('hidden');
                $('#DownsellNumber1').removeClass('hidden');
                $('#msg14disapproved').removeClass('hidden');
                $('#msg16disapproved').removeClass('hidden');
                $('#msg21disapproved').removeClass('hidden');
                $('#msg23disapproved').removeClass('hidden');
            } else {
                $('#PrimaryNumber').removeClass('hidden');
                $('#PrimaryNumber1').removeClass('hidden');
                $('#msg14approved').removeClass('hidden');
                $('#msg16approved').removeClass('hidden');
                $('#msg21approved').removeClass('hidden');
                $('#msg23approved').removeClass('hidden');
            }
            scrollToBottom();
        }
    });

    function scrollToBottom(elementId) {
        var object = $('main');
        $('html, body').animate({
            scrollTop: object.offset().top + object.outerHeight() - $(window).height()
        }, 'fast');
    }

});

function typingEffect(cssClass) {

    string = '<div class="temp-typing bg-gray-200 p-3 rounded-lg shadow-xs mt-2 inline-block">';
    string += '<div class="typing-animation">';
    string += '<div class="typing-dot"></div>';
    string += '<div class="typing-dot"></div>';
    string += '<div class="typing-dot"></div>';
    string += '</div>';
    string += '</div>';

    return string;

}

function updateURL(key, value) {
    const url = new URL(window.location);
    url.searchParams.set(key, value);
    window.history.pushState({}, '', url);
    if (!window._rgba_tags || !Array.isArray(window._rgba_tags)) {
        window._rgba_tags = [{}]; // Initialize as an array with one object
    } else if (!window._rgba_tags[0]) {
        window._rgba_tags[0] = {}; // Ensure first element is an object
    }

    // Update the key-value pair dynamically
    window._rgba_tags[0][key] = value;
}