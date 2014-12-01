jQuery(document).ready(function($){
	var $form_modal = $('.student-popup'),
		$form_info = $form_modal.find('#cd-info'),
		$form_sysinfo = $form_modal.find('#cd-sysinfo'),
		$form_modal_tab = $form_modal.find('.cd-switcher'),
		$tab_info = $form_modal_tab.children('li').eq(0).children('a'),
		$tab_sysinfo = $form_modal_tab.children('li').eq(1).children('a'),
		$form_teacher_modal = $('.teacher-popup'),
		$form_teacher_info = $form_teacher_modal.find('#cd-info'),
		$form_teacher_sysinfo = $form_teacher_modal.find('#cd-sysinfo'),
		$form_teacher_modal_tab = $form_teacher_modal.find('.cd-switcher'),
		$tab_teacher_info = $form_teacher_modal_tab.children('li').eq(0).children('a'),
		$tab_teacher_sysinfo = $form_teacher_modal_tab.children('li').eq(1).children('a');


	//open student popup
	$('.cd-popup-trigger').on('click', function(event){
		event.preventDefault();
		$('.student-popup').addClass('is-visible');
		login_selected();
	});

	//open teacher popup
	$('.popup-teacher-trigger').on('click', function(event){
		event.preventDefault();
		$('.teacher-popup').addClass('is-visible');
		teacher_info_selected();
	});
	
	//close student popup
	$('.student-popup').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.student-popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});

	//close teacher popup
	$('.teacher-popup').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.teacher-popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});

	//close student popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.student-popup').removeClass('is-visible');
	    }
    });

    //close teacher popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.teacher-popup').removeClass('is-visible');
	    }
    });

    //switch from a tab to another
	$form_modal_tab.on('click', function(event) {
		event.preventDefault();
		( $(event.target).is( $tab_info ) ) ? login_selected() : signup_selected();
	});

	//switch from a tab to another
	$form_teacher_modal_tab.on('click', function(event) {
		event.preventDefault();
		( $(event.target).is( $tab_teacher_info ) ) ? teacher_info_selected() : teacher_sysinfo_selected();
	});

	function login_selected(){
		$form_info.addClass('is-selected');
		$form_sysinfo.removeClass('is-selected');
		$tab_info.addClass('selected');
		$tab_sysinfo.removeClass('selected');
	}

	function teacher_info_selected(){
		$form_teacher_info.addClass('is-selected');
		$form_teacher_sysinfo.removeClass('is-selected');
		$tab_teacher_info.addClass('selected');
		$tab_teacher_sysinfo.removeClass('selected');
	}

	function signup_selected(){
		$form_info.removeClass('is-selected');
		$form_sysinfo.addClass('is-selected');
		$tab_info.removeClass('selected');
		$tab_sysinfo.addClass('selected');
	}

	function teacher_sysinfo_selected(){
		$form_teacher_info.removeClass('is-selected');
		$form_teacher_sysinfo.addClass('is-selected');
		$tab_teacher_info.removeClass('selected');
		$tab_teacher_sysinfo.addClass('selected');
	}
});