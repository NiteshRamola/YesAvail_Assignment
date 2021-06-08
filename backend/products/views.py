from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

from .serializers import ProductSerializer


@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()

    page = request.query_params.get('page')
    paginator = Paginator(products, 4)

    try:
        products = paginator.page(page)
    except PageNotAnInteger:
        products = paginator.page(1)
    except EmptyPage:
        products = paginator.page(paginator.num_pages)

    if page == None:
        page = 1

    page = int(page)

    serializer = ProductSerializer(products, many=True)
    return Response({'products': serializer.data, 'page': page, 'pages': paginator.num_pages})
