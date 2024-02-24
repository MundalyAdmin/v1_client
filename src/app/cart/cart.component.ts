import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CartService } from './cart.service';
import { CartItem } from './cart.model';
import { Flowbite } from '../shared/decorators/flowbite.decorator';
import { ReportService } from '../report/report.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
@Flowbite()
export class CartComponent implements OnInit {
  @ViewChild('screenParticipantModalButton', { static: false })
  screenParticipantModalButton!: ElementRef;
  form!: FormGroup;
  generationTypes = [
    {
      name: 'Mundaly generated',
      value: 'mundaly-generated',
    },
    {
      name: 'Partner generated',
      value: 'partner-generated',
    },
  ];

  @ViewChild('selectResearchParticipantModalButton', { static: false })
  selectResearchParticipantModalButton!: ElementRef;

  totalPrice: number = 0;
  taxPrice: number = 0;
  totalPlusTax = 0;
  constructor(
    public cartService: CartService,
    public reportService: ReportService,
    public fb: FormBuilder
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.form = this.fb.group({ generatedBy: null });
  }

  updatePrice(item: CartItem, event: any) {
    const type = event.target.value;
    if (type == 'up') {
      this.updatePriceUp(item);
    } else if (type == 'down') {
      this.updatePriceDown(item);
    }
  }

  getNumberOfDemographicCriterias(item: CartItem) {
    return Object.keys(item.demographic || {}).length;
  }

  getNumberOfResearchPartners(item: CartItem) {
    return Object.keys(item.research_partners || {}).length;
  }

  removeItem(item: CartItem) {
    this.cartService.deleteItem(item);
  }

  updatePriceUp(item: CartItem) {
    this.cartService.updateItem({
      ...item,
      availability: 'In 4 days',
      generatedBy: 'partner-generated',
      price: Math.round(+item.price + +item.price * 0.6),
    });
  }

  updatePriceDown(item: CartItem) {
    this.cartService.updateItem({
      ...item,
      availability: 'In 3 hours',
      generatedBy: 'auto-generated',
      price: this.reportService.data.find((i) => i.title == item.title)!.price,
    });
  }

  screenParticipant(cartItem: CartItem) {
    this.cartService.singleData = cartItem;
    this.screenParticipantModalButton.nativeElement.click();
  }

  selectResearchPartners(cartItem: CartItem) {
    this.cartService.singleData = cartItem;
    this.selectResearchParticipantModalButton.nativeElement.click();
  }
}
