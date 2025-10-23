import { Link } from 'react-router-dom';
import { Clock, MapPin, ArrowRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Service } from '@/data/services';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const [selectedVariant, setSelectedVariant] = useState(service.variants?.[0]);
  const [showVariants, setShowVariants] = useState(false);

  const currentPrice = selectedVariant?.price || service.price;
  const currentDuration = selectedVariant?.duration || service.duration;
  const currentTitle = selectedVariant?.label || service.title;

  const hasVariants = service.variants && service.variants.length > 0;

  const handleVariantSelect = (e: React.MouseEvent, variant: any) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedVariant(variant);
    setShowVariants(false);
  };

  return (
    <Link to={`/service/${service.id}`} className="block">
      <Card className="group overflow-hidden hover:shadow-elegant transition-all duration-300 hover:scale-105 cursor-pointer h-full relative">
        <div className="relative h-48 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
            {service.price}
          </div>
        </div>
        <CardContent className="p-6">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
              {service.title}
            </h3>
          </div>

          <p className="text-muted-foreground mb-4 line-clamp-2">
            {service.shortDescription}
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{service.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{service.location}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button className="w-full group/btn">
            Learn More
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ServiceCard;
