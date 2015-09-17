# -*- Python -*-
# -*- coding: utf-8 -*-
#
# alec aivazis
#
# this file describes the base views for getFoundArts

# django imports
from django.views.generic import TemplateView
from django.http import HttpResponse
# third party imports
from react.render import render_component

class Home(TemplateView):
    """
    render the index template
    """
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data()
        context['component'] = render_component('scripts/components/root.js', {'foo': 'bar'})
        return context


# end of file
