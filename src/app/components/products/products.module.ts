import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProductsRoutingModule } from './products-routing.module';
import { CategoryComponent } from './physical/category/category.component';
import { SubCategoryComponent } from './physical/sub-category/sub-category.component';
import { ProductListComponent } from './physical/product-list/product-list.component';
import { AddProductComponent } from './physical/add-product/add-product.component';
import { DigitalCategoryComponent } from './digital/digital-category/digital-category.component';
import { DigitalSubCategoryComponent } from './digital/digital-sub-category/digital-sub-category.component';
import { DigitalListComponent } from './digital/digital-list/digital-list.component';
import { DigitalAddComponent } from './digital/digital-add/digital-add.component';
import { ProductDetailComponent } from './physical/product-detail/product-detail.component';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import 'hammerjs';
import 'mousetrap';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgxDropzoneModule } from 'ngx-dropzone';
// search module
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CategoryComponent, SubCategoryComponent, ProductListComponent, AddProductComponent, DigitalCategoryComponent, DigitalSubCategoryComponent, DigitalListComponent, DigitalAddComponent, ProductDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
    NgbModule,
    GalleryModule,
    CKEditorModule,
    NgxDropzoneModule,
    SharedModule
  ],
  exports: [SubCategoryComponent],
  bootstrap: [SubCategoryComponent],
  providers: [
    NgbActiveModal
  ]
})
export class ProductsModule { }
